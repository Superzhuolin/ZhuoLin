// 改写Array.prototype上的七个方法   
import { def } from "./utils";

const arrayPrototype = Array.prototype;
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
// 以Array.prototype为原型创建arrayMethods对象,并暴露arrayMethods方法
export const arrayMethods = Object.create(arrayPrototype);


// 罗列要被改写的七个方法
const methodsNeeedChange = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse',
]
// 遍历每个方法
methodsNeeedChange.forEach(methodName => {

    // 保持功能又能触发响应式(备份原来的7个方法,即methodName)
    const original = arrayPrototype[methodName];
    // 定义新方法
    def(arrayMethods, methodName, function () {
        // 恢复备份函数的功能:以现在数组的上下文作为函数的上下文,再把arguments放进来
        const result = original.apply(this, arguments);//在新方法中调用原来方法

        // 把类数组对象变成数组
        const args = [...arguments];
        /* 将数组身上的__ob__取出来(__ob__已经被添加,因为数组不是最高层，如obj.g属性是数组，obj不能是数组)
        则:第一次遍历obj这个对象的第一层的时候，已经给g属性（就是这个数组）添加了__ob__属性。*/
        const ob = this.__ob__;
        // 让特殊方法splice/unshift/push往数组里面推入/插入需要被observer的内容
        // console.log("arguments:" + arguments);  //arguments为被插入的新项
        let inserted = [];  //被插入新内容
        switch (methodName) {
            case "push":
            case "unshift":
                inserted = args;
                break;
            case "splice":
                // splice格式(下标,数量,插入的新项)  从插入新项中开始
                inserted = args.slice(2);
                // console.log("11:"+arguments.slice(2));
                break;
        }

        // 判断有没有要插入的新项,让新项也变为响应的
        if (inserted) {
            ob.observeArray(inserted);
        }
        
        console.log("啦aaaa啊");
        ob.dep.notify();
        return result;
    }, false)

})
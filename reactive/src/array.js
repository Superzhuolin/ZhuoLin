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
methodsNeeedChange.forEach(methodName => {
    // 保持功能又能触发响应式(备份原来的7个方法,即methodName)
    const original = arrayPrototype[methodName];
    // 定义新方法
    def(arrayMethods, methodName, function () {
        console.log("啦aaaa啊");
        // 恢复备份函数的功能:以现在数组的上下文作为函数的上下文,再把arguments放进来
        original.apply(this, arguments);//在新方法中调用原来方法
    }, false)
})
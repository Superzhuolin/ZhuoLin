import { def } from "./utils";
import defineReative from "./defineReactive";
import { arrayMethods } from "./array";
import observe from "./observe";
import Dep from "./Dep";

// 创建循环递归的类Observe:(作用)将正常的object转换为每个层级的属性都是响应式(可被侦测的)的object 
export default class Observer {  //任何一个层级都会调用Observer
    constructor(value) {
        // 绑定到__ob__上
        this.dep = new Dep();//每个Observer类的实例成员中都有一个Dep的实例

        // 给实例添加不可枚举的__ob__属性,值为new实例  (this表示的是实例ob本身)
        def(value,"__ob__",this,false);
        if(Array.isArray(value)){
            // 若为数组,强制将该对象原型指向arrayMethods(以Array.prototype为原型创建的对象)
            // Object.setPrototypeOf(o, arrayMethods)  等同于 o.proto = arrayMethods
            Object.setPrototypeOf(value, arrayMethods);
            // 让数组中的内容被observe
            this.observeArray(value);
        } else {
            //若不为数组object转换为每个层级的属性都是响应式（可以被侦测的）的object
            this.walk(value);
        }
    }

    // 正常数据遍历value
    walk(value){
        for(let k in value){
            // console.log(k);   //k为obj中每层的属性
            //在一个value对象上定义一个新属性(a,b),并将对象"剥开一层"传给属性值
            defineReative(value,k);//递归之前,完成外层属性响应
        }
    }
    // 数组的遍历观察
    observeArray(arr){
        // console.log("数组的arr:"+arr);  //22,33,44,55
        // l = arr.length 防止数组在遍历过程中有特殊变化
        for (let i = 0, l = arr.length; i < l; i++) {
            observe(arr[i]);//逐项observe
        }
    }
}
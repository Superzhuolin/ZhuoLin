import { def } from "./utils";
import defineReative from "./defineReactive"

/* 创建循环递归的类Observe:将正常的object转换为每个层级的属性
都是响应式(可以被侦测的)的object */
export default class Observer {
    constructor(value) {
        console.log("我是Observer构造器", value);
        // 给实例添加不可枚举的__ob__属性,值为new实例  (this表示的是实例ob本身)
        def(value,"__ob__",this,false);
        // 将一个正常的object转换为每个层级的属性都是响应式（可以被侦测的）的object
        this.walk(value);
    }

    // 遍历value
    walk(value){
        for(let k in value){
            // console.log(k);
            //在一个value对象上定义一个新属性(a,b),并将对象"剥开一层"传给属性值
            defineReative(value,k);//递归之前,完成外层属性响应
        }
    }
}
import observe from './observe.js';
import Observe from './Observer';
// import Watcher from './Watcher.js';
import defineReative from "./defineReactive"

var obj = {
    a: {
        m: { 
            n: 5
        }
    }
};

// 创建observer函数,注意函数的名字没r
// 参数value是要侦测的对象  value传入的值实际上是defineReative中闭包的val
function observe(value){
    // 该函数只为对象服务,若不是对象,什么都不做
    if(typeof value != "object") return;
    // 定义ob存储obser实例
    var ob;
    // value.__ob__ 用于存储obser实例   __ob__ 是为了不跟常见属性重名
    if(typeof  value.__ob__ !== "undefined"){
        ob = value.__ob__ ;
    }else{
        ob = new Observe(value);
    }
}
observe(obj);

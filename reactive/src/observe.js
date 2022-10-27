import Observer from './Observer';

/* 逐层往下oberver递归  递归到最后一层结束 */
// 创建observer函数,注意函数的名字没r
// 参数value是要侦测的对象  value传入的值实际上是defineReative中闭包的val
export  default function (value) {
    // 该函数只为对象服务,若不是对象,什么都不做
    if (typeof value != "object") return;
    // 定义ob存储obser实例
    var ob;
    // value.__ob__ 用于存储obser实例   __ob__ 是为了不跟常见属性重名
    if (typeof value.__ob__ !== "undefined") {
        ob = value.__ob__;
    } else {//若没有__ob__属性   则会new出实例添加到__ob__上
        ob = new Observer(value);
    }
}
"use strict";
// function fn(a:number):number{
//     return a;
// }
/* 定义函数或者是类时,如果遇到类型不明确就可以使用泛型 */
function fn(a) {
    return a;
}
// 直接调用具有泛型的函数
let result = fn(10); //不指定泛型,TS可以自动识别
let result2 = fn("hello");
// 可以同时指定多个
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, "hello");
// T extends Inter 表示泛型T必须是Inter实现类(子类)
function fn3(a) {
    return a.length;
}
fn3({ length: 10 });
// 类中的泛型
class Myclass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new Myclass("孙悟空");

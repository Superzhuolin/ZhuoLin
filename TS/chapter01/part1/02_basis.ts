// 变量声明都是用大写的

// 1.声明Number类型变量a
let a: number;

a = 10;
// a = "helll";
console.log(a);

let b: string;
b = "ds";
// b =123;

// 声明完变量直接赋值
// let c :boolean =true;
// 如果变量声明和赋值同时进行,TS可以自动对变量进行类型检测
let c = true;
c = true;
// c =123
// 2.函数参数类型声明
function sum(a: number, b: number): number {
    // 3.函数返回值声明
    return a + b;
}
console.log(sum(1, 11));


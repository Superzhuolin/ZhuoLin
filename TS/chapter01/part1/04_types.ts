// object表示一个js对象
let a: object;
a = {};
a = function () {
};


// {}用来指定对象中可以包含那些属性
// 语法:{属性名:属性值,属性名?:属性值}
// 在属性背后加?表示属性可选
let b: {name:string,age?:number}
b = {name: "孙悟空"}
// b = {name: "孙悟空",age:12}

let c :{name:string,[propname:string]:any}
c = {name:"孙悟空",age:11,gender:"男"}

/* 
    设置函数结构的类型声明:
        语法:(形参:类型,形参:类型...) =>返回值
*/

let d:(a:number,b:number)=>number;
d= function(n1,n2,){
    return n1+n2;
}
/* 数组的类型声明:
    类型[]  Array<类型>
*/

// string[] 表示字符串数组
let e :string[];
e = ["a",'b','v']
// number[]  Array<number> 表示数字数组
let f : number[];
f = [1,2,3]
let g:Array<number>
g = [1,2,3,]

/* 
    元组:固定长度的数组
        语法:[类型,类型]
*/
let h :[string,string]
h = ["dd","aa",]

/* 
enum  枚举
*/
enum gender{
    Male=0,
    Femal=1
}
let i: { name: string, gender: gender }
i={
    name:"孙悟空",
    gender:gender.Male
}

// console.log(i.gender === gender.Male);

// &表示同时
let j :{name:string } &{age:number}
// let j :{name:string ,age:number}
j = {name:"孙悟空",age:11};

// 类型取别名
type myType =1|2|3|4;
let k : myType;
k =1;
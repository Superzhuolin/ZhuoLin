// object表示一个js对象
var a;
a = {};
a = function () {
};
// {}用来指定对象中可以包含那些属性
// 语法:{属性名:属性值,属性名?:属性值}
// 在属性背后加?表示属性可选
var b;
b = { name: "孙悟空" };
// b = {name: "孙悟空",age:12}
var c;
c = { name: "孙悟空", age: 11, gender: "男" };
/*
    设置函数结构的类型声明:
        语法:(形参:类型,形参:类型...) =>返回值
*/
var d;
d = function (n1, n2) {
    return n1 + n2;
};
/* 数组的类型声明:
    类型[]  Array<类型>
*/
// string[] 表示字符串数组
var e;
e = ["a", 'b', 'v'];
// number[]  Array<number> 表示数字数组
var f;
f = [1, 2, 3];
var g;
g = [1, 2, 3,];
/*
    元组:固定长度的数组
        语法:[类型,类型]
*/
var h;
h = ["dd", "aa",];
/*
enum  枚举
*/
var gender;
(function (gender) {
    gender[gender["Male"] = 0] = "Male";
    gender[gender["Femal"] = 1] = "Femal";
})(gender || (gender = {}));
var i;
i = {
    name: "孙悟空",
    gender: gender.Male
};
console.log(i.gender === gender.Male);


const { rejects } = require("assert");
const { resolve } = require("path");
const fs = require("fs");//导入fs模块

// 1.回调函数形式
// err 出现错误时的参数     data读取到的结果
// fs.readFile("./resource/content.txt",(err,data)=>{
// //  如果出错 则抛出错误
// if(err) throw err;
// // 否则输出文件内容
// console.log(data.toString());
// }) 

// 2.Promise形式
let p = new Promise((resolve, rejects) => {
    // 使用fs模块中的readFile方法
    fs.readFile("./resource/content.txt", (err, data) => {
        if (err) rejects(err);
        resolve(data);
    })
})
// 调用then
p.then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
})
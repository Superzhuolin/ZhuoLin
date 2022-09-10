/**node.js中util模块的内置方法:
 * util.promisify 方法:  (错误优先的回调函数)
 *在fs模块中的异步api中err基本上都是第一个参数,它会返回promise版本
 */

const util = require("util");//引入 util 模块
const fs = require("fs"); //引入fs模块
// 返回一个新的函数,该函数调用后会返回promise对象
let mineReadFile = util.promisify(fs.readFile);//util对象中的promisify方法

mineReadFile("./resource/content.txt").then(value=>{
    console.log(value.toString());
})
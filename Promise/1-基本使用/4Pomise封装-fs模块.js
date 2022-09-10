/**
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数:  path  文件路径
 * 返回:  promise 对象 
 *          成功为文件内容  错误为错误对象
 */
function mineReadFile(path){
    return new Promise((resolve,reject)=>{
        require("fs").readFile(path, (err, data) => {//读取文件
            if(err) reject(err);
            resolve(data);
        })     
    })
}

mineReadFile("./resource/content.txt")
.then((value)=>{
    console.log(value.toString());
},(reason)=>{
    console.log(reason);
})
//Fn执行的函数,obj函数运行时this指向的对象,...args函数运行时的参数
function call (Fn,obj,...args){//改变函数this的指向后自动 执行函数
    // 判断
    if(obj === undefined || obj ===null){
        // ES11中使用globalThis指向全局对象 
        obj=globalThis; //node.js环境下,全局对象是global
    }
    obj.temp = Fn;// 为obj添加与Fn功能一样的方法
    // (temp方法的内部this指向obj)
    let result = obj.temp(...args);//调用并获取temp方法
    delete obj.temp;// 删除temp方法
    return result;  //返回执行结果
}
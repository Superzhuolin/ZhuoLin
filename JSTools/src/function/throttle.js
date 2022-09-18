
 function throttle(callback,wait){
     let start = 0;// 定义开始时间
    //  返回结果是一个函数
    return function(e){
        // 获取当前时间戳
        let now = Date.now();
        // 判断
        if(now - start >=wait){
            // 若满足条件,则执行回调函数
            callback.call(this,e);//函数内部this指向事件源
            start = now; //修改开始时间
        }
    }
 }
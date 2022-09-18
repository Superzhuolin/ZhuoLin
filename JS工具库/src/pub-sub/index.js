/* 消息订阅与发布:对代码进行分离实现代码解耦 
    事件总线无法实现单独取消某个绑定*/
const PubSub = {
    id: 1,//订阅唯一id
    // 频道与回调保存容器
    callbacks: {
        // pay:{
        //     token_1:fn,
        //     token_1:fn2,
        // }
    }
}
// 订阅频道
PubSub.subscribe = function (channel, callback) {
    // 创建唯一的编号
    let token = "token_" + this.id++;
    // 判断callbacks属性中是否存在pay
    if (this.callbacks[channel]) {
        this.callbacks[channel][token] = callback;
    } else {
        this.callbacks[channel] = {
            [token]: callback,//因为token是变量所以要用[token]表示
        }
    }
    // 返回频道订阅的ID
    return token;
}
// 发布消息
PubSub.publish = function (channel, data) {
    // 获取当前频道上的所有回调
    if (this.callbacks[channel]) {
        Object.values(this.callbacks[channel]).forEach(callback => {
            callback(data);//执行回调
        });
    }
}

/*
4. 取消消息订阅
  1). 没有传值, flag为undefined
  2). 传入token字符串
  3). msgName字符串
*/
PubSub.unsubscribe = function(flag){
    // 如果flag为undefined  则清空所有订阅
    if(flag === undefined){
        this.callbacks = {};
    }else if(typeof flag ==="string"){
        // 判断是否为token_ 开头
        if(flag.indexOf("token_") === 0){
            // 如果是表明是一个订阅ID
            //Object.values(this.callbacks)获取所有callbacks对象的所有键值
            // .find(obj=>hasOwnProperty(flag)) 遍历键值对象 并在对象中寻找含有flag的回调对象
            // callbackObj表示拥有token_Id的对象(pay / cancel)
            let callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag));
            // 判断
            if(callbackObj){
                delete callbackObj[flag];
            }
        }else{
            // 表面是一个频道名称
            delete this.callbacks[flag];//删除对象中的flag对象
        }
    }
}
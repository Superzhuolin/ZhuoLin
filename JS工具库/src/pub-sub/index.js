/* 消息订阅与发布:对代码进行分离实现代码解耦 
    事件总线无法实现单独取消某个绑定*/
// 订阅频道
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
}
// 发布消息
PubSub.publish = function (channel, data) {
    // 获取当前频道上的所有回调
    if (this.callbacks[channel]) {
        // 
        Object.values(this.callbacks[channel]).forEach(callback => {
            callback(data);//执行回调
        });
    }

}
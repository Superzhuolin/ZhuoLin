/* 
eventBus: 包含所有功能的事件总线对象
eventBus.on(eventName, listener): 绑定事件监听
eventBus.emit(eventName, data): 分发事件
eventBus.off(eventName): 解绑指定事件名的事件监听, 如果没有指定解绑所有
 */
const eventBus={
    // 保存类型与回调的容器
    callbacks:{}
};
// 绑定事件  往里面存容器
eventBus.on = function(type,callback){
    // 判断是否有这个类型的回调函数
    if(this.callbacks[type]){
            // 若有 则往数组中压入新元素(回调)
        this.callbacks[type].push(callback);
    } else {// 若没有 则将回调放入数组中(用数组包裹)
        this.callbacks[type] =[callback];
    }
}
// 触发事件 往里面取容器
eventBus.emit = function(type,data){
    // 判断
    if (this.callbacks[type] && this.callbacks[type].length>0){
        // 遍历数组
        this.callbacks[type].forEach(callback => {
            callback(data);//执行回调
        });

    }
}
// 事件的解绑
eventBus.off = function(eventName){
    // 若传入了eventName类型事件
    if (eventName){
        // 删除eventName对应的事件回调
        delete this.callbacks[eventName];
    } else {//若没有传eventName则全部移除
        this.callbacks ={};
    }

}
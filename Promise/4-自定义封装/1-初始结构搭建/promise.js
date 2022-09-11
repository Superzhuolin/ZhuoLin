function Promise(executor){
    // 添加属性
    this.PromiseState = "pending";
    this.PromiseResult = null;
    //保存实例对象this值   此时this指向object
    const self = this; //self _this that
    // resolve函数
    function resolve(data){
        // console.log(this); //此时this指向window 
        // 1.修改对象状态(即实例对象上的PromiseState属性)
        self.PromiseState ="fulfilled";//resolved
        // 2.设置对象结果值(PromiseResult)
        self.PromiseResult = data;
    }
    // reject函数
    function reject(data){
        // 1.修改对象状态(即实例对象上的PromiseState属性)
        self.PromiseState = "rejected";
        // 2.设置对象结果值(PromiseResult)
        self.PromiseResult = data;
    }
    try {
        //同步调用[执行器函数]
        executor(resolve, reject);
    } catch (e) {
        // 修改promise状态为[失败]
        reject(e);//抛出的对象就是promise对象失败的结果值
        
    }
   
}

// 添加then方法
Promise.prototype.then = function(onResolved,onrejected){

}
function Promise(executor) {
    // 添加属性
    this.PromiseState = "pending";
    this.PromiseResult = null;
    // 声明属性
    this.callbacks = [];
    //保存实例对象this值   此时this指向object
    const self = this; //self _this that

    // resolve函数
    function resolve(data) {
        //判断状态(在pending状态才会执行后面内容)
        if (self.PromiseState !== "pending") return;

        // 1.修改对象状态(即实例对象上的PromiseState属性)
        self.PromiseState = "fulfilled";//resolved
        // 2.设置对象结果值(PromiseResult)
        self.PromiseResult = data;

        //调用成功的回调函数
        self.callbacks.forEach(item => {
            item.onResolved(data);
        })
    }
    // reject函数
    function reject(data) {
        //判断状态
        if (self.PromiseState !== "pending") return;

        // 1.修改对象状态(即实例对象上的PromiseState属性)
        self.PromiseState = "rejected";
        // 2.设置对象结果值(PromiseResult)
        self.PromiseResult = data;

        //调用失败的回调函数
        self.callbacks.forEach(item => {
            item.onrejected(data);
        })
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
Promise.prototype.then = function (onResolved, onrejected) {
    //返回一个回调函数
    return new Promise((resolve, reject) => {
        // 调用回调函数  PromiseState
        // this指向实例对象p
        if (this.PromiseState === "fulfilled") {
            try {
                let result = onResolved(this.PromiseResult);// 获取回调函数的执行结果
                // 判断
                if (result instanceof Promise) {//若为promise对象
                    result.then(v => {
                        resolve(v);//改变返回的promise(即res)为成功,同时让res的成功结果也为v
                    }, r => {
                        reject(r);
                    })
                } else { //将结果(res)的对象状态为[成功]
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        }

        if (this.PromiseState === "rejected") {
            onrejected(this.PromiseResult);
        }
        // 判断panding状态
        if (this.PromiseState == "pending") {
            this.callbacks.push({ onResolved, onrejected });//给回调函数数组中添加对象元素
        }
    })
}
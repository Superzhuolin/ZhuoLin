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
    const self = this;
    // 判断回调函数参数 若不等于函数需创建默认值
    if (typeof onResolved !== "function") {
        onResolved = value => value;
    }
    if (typeof onrejected !== "function") {
        onrejected = reason => {
            throw reason;
        }
    }
    return new Promise((resolve, reject) => {//返回一个回调函数
        //封装函数
        function callback(type) {
            try {
                let result = type(self.PromiseResult);// 获取回调函数的执行结果
                // 根据结果决定返回的promise状态
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

        // 调用回调函数  PromiseState
        // this指向实例对象p
        if (this.PromiseState === "fulfilled") {
            callback(onResolved);
        }

        if (this.PromiseState === "rejected") {
            callback(onrejected);
        }
        // 判断panding状态
        if (this.PromiseState == "pending") {
            this.callbacks.push({
                onResolved: () => {
                    callback(onResolved);
                },
                onrejected: () => {
                    callback(onrejected);
                }
            });
        }
    })
}
// 添加catch方法
Promise.prototype.catch = function (onrejected) {
    return this.then(undefined, onrejected);
}
//添加resolve方法
Promise.resolve = (value) => {
    // 返回promise对象
    return new Promise((resolve, reject) => {
        // 根据结果决定返回的promise状态
        if (value instanceof Promise) {//若为promise对象
            value.then(v => {
                resolve(v);//改变返回的promise(即res)为成功,同时让res的成功结果也为v
            }, r => {
                reject(r);
            })
        } else { //将结果(res)的对象状态为[成功]
            resolve(value);
        }
    });
}
//添加reject方法
Promise.reject = (reason) => {
    // 返回promise对象
    return new Promise((resolve, reject) => {
        reject(reason);
    });
}
// 添加all 方法
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let count = 0; //声明变量
        let arr = [];
        // 遍历
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                // 得知对象状态是成功的
                //灭国promise对象 都成功
                count++;
                // 将当前promise对象的结果  存入数组中
                arr[i] = v;
                if (count === promises.length) {//修改状态
                    resolve(arr);
                }
            }, r => {
                reject(r);
            })
        }
    })
}
// 添加race方法
Promise.race = function(promises){
    return new Promise((resolve,reject)=>{
        for(let i=0;i<promises.length;i++){
            promises[i].then(v=>{
                // 修改返回对象状态为[成功]
                resolve(v);
            },r=>{
                reject(r);// 修改返回对象状态为[失败]
            })
        }
    })
}
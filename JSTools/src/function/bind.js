function bind (Fn,obj,...args1){
    // 返回一个新的函数
    return function (...args2){ //先接收,后传入call函数
        // 执行call函数(...args2放在后面是因为函数调用时参数靠后)
        return call(Fn, obj, ...args1, ...args2); 
    }
}
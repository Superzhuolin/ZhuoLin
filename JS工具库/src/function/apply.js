function apply(Fn,obj,args){
    // 判断
    if(obj === undefined || obj === null){
        obj = globalThis;
    }
    obj.temp = Fn; //为obj添加临时方法
    let result = obj.temp(...args);//执行方法
    delete obj.temp; //删除临时属性
    return result; //返回结果
}
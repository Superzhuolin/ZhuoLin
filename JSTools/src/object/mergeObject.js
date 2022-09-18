function mergeObject(...objs){
    const result ={};
    // 遍历所有的参数对象
    objs.forEach(obj=>{
        // 获取当前对象所有的属性    即获取 a b a b c
        Object.keys(obj).forEach(key=>{
            // console.log(key);
            // 检测result 中是否存在key属性
            if (result.hasOwnProperty(key)){
                // concat()合并两个或多个数组，返回值是一个新数组，不会改变原数组.
                result[key] = [].concat(result[key],obj[key]);
            }else{
                // 如果没有  则直接写入
                result[key] = obj[key]; // obj[key] 是当前正在遍历对象的属性值
            }
        })

    })
    return result;
}
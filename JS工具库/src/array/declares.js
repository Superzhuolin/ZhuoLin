function map(arr,callback){
    // 声明一个空数组
    let result =[];
    // 遍历数组
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i], i));// 执行回调
    }
    return result;
}
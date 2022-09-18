/**
 * 
 * @param {Array} arr 
 * @param  {...any} args 
 */
function pull (arr,...args){
    const result = [];
    for(let i=0;i<arr.length;i++){
        if(args.includes(arr[i])){
            // 将当前元素的值存入result中
            result.push(arr[i]);
            // 删除当前元素
            arr.splice(i,1);
            i--;//下标自减
        }
    }
    return result;
}
function pullAll(arr,values){
    return pull(arr, ...values);
}
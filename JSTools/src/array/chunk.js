/**
 * 数组分块儿
 * @param {Array} arr 
 * @param {Number} size 
 */
function chunk(arr,size=1){
    if(arr.length === 0){
        return [];
    }
    // 声明两个变量
    let result = [];
    let tmp =[];
    arr.forEach(item=>{
        // 判断tmp元素是否为0
        if(tmp.length ===0){
              result.push(tmp); //[[]]
        }
        // 将元素压入到临时数组中
        tmp.push(item);  //[[1,2,3]]
        if(tmp.length ===size){
            tmp=[];
        }
    })
    return result;
}
/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function difference (arr1,arr2=[]){
    //叛党参数
    if(arr1.length  ===0){
        return [];
    }
    if(arr2.length  ===0){
        return arr1.slice();
    }
    const result = arr1.filter(item=>!arr2.includes(item)); 
    return result;
}
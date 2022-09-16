/**
 * @param {Array} arr 
 * @param {Number} size 
 * 得到当前数组过滤掉左边count个后剩余元素组成的数组
 * 说明: 不改变当前数组, count默认是1
 */
function drop(arr, size) {
    //过滤原数组  产生新数组
    return arr.filter((value, index) => index >= size)
}
/* 得到当前数组过滤掉右边count个后剩余元素组成的数组 */
function dropRight(arr,size){
    return arr.filter((value,index)=>index <arr.length-size)
}
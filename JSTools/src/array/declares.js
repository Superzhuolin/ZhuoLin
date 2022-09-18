export function map(arr,callback){
    // 声明一个空数组
    let result =[];
    // 遍历数组
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i], i));// 执行回调
    }
    return result;
}

/* 
@param {Array} arr
@param {Export function} callback
@param {*} initValue  //初始值
 */


/* 从左到右为每个数组元素执行一次回调函数,并把上次回调函数的返回值
放在一个暂存器中传递给下次的回调函数,并返回最后一次回调函数的返回值*/

export function reduce(arr, callback, initValue) {
    let result = initValue; //声明变量
    // 执行回调
    for (let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i]);//执行回调
    }
    return result; //返回最终的结果
}

/* 
@param {Array} arr
@param {Export function} callback
 */
export function filter (arr,callback){
    let result =[]; //声明空数组 
    // 遍历数组
    for(let i=0;i<arr.length;i++){
        let res = callback(arr[i],i);//执行回调
        //判断 若为真则压入到result结果中
        if(res){
            result.push(arr[i]);
        }
    }
    return result; //返回结果
}

/* 
@param {Array} arr
@param {Export function} callback
 */
export function find(arr,callback){
    for(let i=0;i<arr.length;i++){
        let result = callback(arr[i],i);
        if(result){
            return arr[i];
        }
    }
    return undefined;
}

/* 
every(): 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
some(): 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false
 
@param {Array} arr
@param {Export function} callback
*/
export function every (arr,callback){
    // 遍历数组
    for(let i=0;i<arr.length;i++){
        // 执行回调 若回调返回结果为false 
        if(!callback(arr[i],i)){
            return false;
        }
    }
    return true;// 若都为true 则返回true
}
export function some(arr, callback) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调 若回调返回结果为true 
        if (callback(arr[i], i)) {
            return true;
        }
    }
    return false;// 若都为false 则返回false
}
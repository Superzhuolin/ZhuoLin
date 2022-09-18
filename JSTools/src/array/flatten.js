/**
 * 数组扁平化
 * @param {Array} arr 
 */

function flatten1(arr) {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            // flatten1(item);
            result = result.concat(flatten1(item));//递归
        } else {
            result = result.concat(item);
        }
    })
    return result;
}
/**
 * 
 * @param {Array} arr 
 */

function flatten2(arr) {
    let result = [...arr];
    while (result.some(item => Array.isArray(item))) {
        // result ==[].concat([1,2,[3,4,[5,6]],7]);  [1,2,3,4,[5,6],7]
        // result ==[].concat([1,2,3,4,[5,6],7]);  [1,2,3,4,5,6,7]
        result = [].concat(...result);
        // console.log(result);
    }
    return result;
}
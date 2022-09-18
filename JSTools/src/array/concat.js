/**
 * @param {Array} arr 
 * @param  {...any} args 
 */
export function concat (arr,...args){
    const result = [...arr];//将arr中的数组元素放在最终结果中
    // 遍历数组   
    args.forEach(item=>{
        // 判断item是否为数组
        if(Array.isArray(item)){
            // result.push(4,5,6);  相当于这样子
            result.push(...item); //数组直接压回形成二维数组
        }else{
            result.push(item);//非数组直接压
        }
    })
    console.log(result);
}

/* slice(): 切片
语法: var new_array = slice(array, [begin[, end]])
功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变 */
export function slice(arr,begin,end){
    if(arr.length ===0){
        return [];
    }
    // 判断begin
    begin = begin || 0;
    if(begin >=arr.length){
        return []
    }
    // 判断end
    end =end ||arr.length;
    if(end<begin){
        end =arr.length;
    }

    const result =[]; 
    for(let i=0;i<arr.length;i++){
        if(i>=begin &&i<end){
            // 将元素压入数组
            result.push(arr[i]);
        }
    }
    return result;
}
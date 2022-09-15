/* 
方法1: 利用forEach()和indexOf()
说明: 本质是双重遍历, 效率差些

方法2: 利用forEach() + 对象容器
说明: 只需一重遍历, 效率高些

方法3: 利用ES6语法: from + Set 或者 ... + Set
说明: 编码简洁 */
function unique1(arr){
    // 声明一个空数组
    const result =[];
    // 遍历原数组
    arr.forEach(item => {
        // 若result中没有这个元素
        //indexOf获取元素在数组中的下标,不存在则返回-1
        if (result.indexOf(item) === -1) {
            // 若result中没有这个元素 则插入到数组中
            result.push(item);
        } 
    });
    return result; //返回
}

function unique2(arr){
    const result =[];
    //把数组中的值作为下标存入obj中,从而判断该属性是否已经存在,方便检测
    const obj ={};
    // 遍历数组
    arr.forEach(item=>{
        if(obj[item]==undefined){
            obj[item] = true;// 将item作为下标存储在obj中
            result.push(item);
        }
    })
    return result;
}
function unique3(arr){
    // let set = new Set(arr);//将数组转化为集合Set(已去重)
    // let array = [...set];
    // return array;
    return [...new Set(arr)];  //精简版
}
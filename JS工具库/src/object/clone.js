/**
 * 
 * @param {*} target 
 */
function clone1(target){
    //类型判断 [] {} null 
    if(typeof target === "object" && target !== null){
        // 判断数据是否为数组
        if(Array.isArray(target)){
            return [...target];
        }else{
            return {...target};
        }
    }else{
        return target;
    }
}
function clone2(target){
    //类型判断 [] {} null 
    if(typeof target === "object" && target !== null){
        // 创建一个容器
        const result = Array.isArray(target)?[]:{};
        // 遍历target数据 (数组或者对象)
        for(let key in target){
            // 
        }
    }else{
        return target;
    }
}
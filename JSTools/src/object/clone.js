/**克隆数据
 * @param {*} target 
 */
function clone1(target) {
    //类型判断 [] {} null 
    if (typeof target === "object" && target !== null) {
        // 区分数组与对象
        if (Array.isArray(target)) {
            return [...target];
        } else {
            return { ...target };
        }
    } else {
        return target;
    }
}
function clone2(target) {
    //类型判断 [] {} null 
    if (typeof target === "object" && target !== null) {
        // 创建一个容器 存储数组或对象
        const result = Array.isArray(target) ? [] : {};
        // 遍历target数据 (数组或者对象)
        for (let key in target) {
            //  for in 循环可以遍历当前对象和原型对象上的属性
            // 若当前对象身上包含该属性
            if (target.hasOwnProperty(key)) {
                // 将属性设置到 result 结果数据中
                result[key] = target[key];
            }
        }
        return result;
    } else {
        return target;
    }
}

/* 
深度克隆
1). 大众乞丐版:使用json的API将数据转换为Json格式字符串,再将字符串转换为数据
    问题1: 函数属性会丢失
    问题2: 循环引用会出错
2). 面试基础版本
    解决问题1: 函数属性还没丢失
3). 面试加强版本
    解决问题2: 循环引用正常
4). 面试加强版本2(优化遍历性能)
    数组: while | for | forEach() 优于 for-in | keys()&forEach() 
    对象: for-in 与 keys()&forEach() 差不多
*/

function deepClone1(target) {
    // 通过数据创建JSON格式字符串
    let str = JSON.stringify(target);
    // 将JSON字符串创建为JS数据
    let data = JSON.parse(str);
    return data;
}

function deepClone2(target) {
    if (typeof target === "object" && target !== null) {
        // 创建一个容器
        const result = Array.isArray(target) ? [] : {};
        for (let key in target) {
        //检测属性是否为对象本身的属性(不拷贝原型对象上的属性) 
            if(target.hasOwnProperty(key)){
                result [key] = deepClone2(target[key])// 拷贝
            }
        }
        return result;
    } else {
        return target;
    }
}


function deepClone3(target,map =new Map()) {
    if (typeof target === "object" && target !== null) {
        // 克隆数据之前判断,数据之前是否克隆过(获取resul值)
        // get(key)：返回一个 Map 对象中与指定键相关联的值，找不到则返回 undefined。
        let cache =map.get(target);
        if(cache){ //若键值都存在,即克隆过 直接返回
         // 当target与result结果相同时就不会继续克隆了,直接从map中缓存取出数据
            return cache;
        }
        // 创建一个容器
        const result = Array.isArray(target) ? [] : {};
        // 将新的结果存入到容器中
         /* set(key, value)：为 Map 对象添加或更新一个指定的键值对。返回对象本身*/
        map.set(target, result);//target键名  result键值
        // map.set(target, 1);//target键名  result键值

        for (let key in target) {
        //检测属性是否为对象本身的属性(不拷贝原型对象上的属性) 
            if(target.hasOwnProperty(key)){
                result[key] = deepClone3(target[key],map)// 拷贝
            }
        }
        return result;
    } else {
        return target;
    }
}

/* 优化遍历性能 */
function deepClone4(target, map = new Map()) {
    if (typeof target === "object" && target !== null) {
        
        // 克隆数据之前判断,数据之前是否克隆过(获取resul值)
        // get(key)：返回一个 Map 对象中与指定键相关联的值，找不到则返回 undefined。
        let cache = map.get(target);
        if (cache) { //若键值都存在,即克隆过 直接返回
            // 当target与result结果相同时就不会继续克隆了,直接从map中缓存取出数据
            return cache;
        }

        let isArray = Array.isArray(target);//判断目标数据类型
        const result = isArray ? [] : {};// 创建一个容器
        // 将新的结果存入到容器中
        /* set(key, value)：为 Map 对象添加或更新一个指定的键值对。返回对象本身*/
        map.set(target, result);//target键名  result键值
        // map.set(target, 1);//target键名  result键值

        // 如果目标数据为数组
        if (isArray){
            // forEach遍历
            target.forEach((item,index)=>{
                result[index] = deepClone4(item,map);
            })
        }else{ //若为对象 获取所有键名,然后forEach
     /* Object.keys() 接受一个对象，返回其可枚举的属性名的列表，包括该对象继承的属性 */
            Object.keys(target).forEach(key=>{
                result[key] = deepClone4(target[key],map);
            })
        }
        return result;
    } else {
        return target;
    }
}
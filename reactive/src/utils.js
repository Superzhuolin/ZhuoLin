// 遍历工具函数  1.定义对象 2.定义属性 3.定义属性值 4.是否可枚举
export const def = function (obj,key,value,enumerable){
    Object.defineProperty(obj,key,{
        value, //定义成传入的value
        enumerable,   //是否可枚举
        writable:true,
        configurable:true,//是否可删除/更改 
    })
}

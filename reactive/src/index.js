// import observe from './observe.js';
// import Watcher from './Watcher.js';

var obj = {};
/* Object.defineProperty()方法会直接在一个对象上定义一个新属性，
或者修改一个对象的现有属性，并返回此对象。 
1.定义对象 2.定义属性 3.定义属性值*/

// 1.数据对象 2.键名 3.值
function defineReative(data,key,val){
    Object.defineProperty(data,key, {
        enumerable:true, //可枚举
        configurable:true,//可被配置,比如delete
        // 变量的赋值与得值若有函数,则会调用get/set()
        get() {
            console.log("正在访问obj的"+key+"属性");
            return val;
        },
        set(newValue) {
            console.log("正在改变obj的" + key + "属性为", newValue);
            if(val == newValue){
                return;
            }
            val = newValue;
        }
    })
}
defineReative(obj,"a",10);
defineReative(obj,"b",100);
console.log(obj.a);  
obj.b = 20;
obj.b ++;
console.log(obj.b);  
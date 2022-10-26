/* Object.defineProperty()方法会直接在一个对象上定义一个新属性，
或者修改一个对象的现有属性，并返回此对象。
1.定义对象 2.定义属性 3.定义属性值*/
// 1.数据对象 2.键名 3.值
export default function defineReative(data, key, val) {
    // 若传入参数个数为2个
    if (arguments.length == 2) {
        val = obj[key];
    }
// defineProperty作用是构造闭包环境     闭包:内外两层函数嵌套
//  外层:defineReative()   内层:get/set()访问外层的val
    Object.defineProperty(data, key, {
        enumerable: true, //可枚举
        configurable: true,//可被配置,比如delete
        // 变量的赋值与得值若有函数,则会调用get/set()
        get() {
            console.log("正在访问obj的" + key + "属性");
            return val;
        },
        set(newValue) {
            console.log("正在改变obj的" + key + "属性为", newValue);
            if (val == newValue) {
                return;
            }
            val = newValue;
        }
    })

}
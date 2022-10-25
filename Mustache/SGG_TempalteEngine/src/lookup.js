/* 
    功能是可以在dataObj对象中，寻找用连续点符号的keyName属性
    比如，dataObj是
    {
        a: {
            b: {
                c: 100
            }
        }
    }
    那么lookup(dataObj, 'a.b.c')结果就是100
    某个大厂的面试题
*/
// dataObj数据对象,keyName属性名
export default function lookup(dataObj, keyName) {
    // console.log(dataObj, keyName);
    // 若keyName存在 . ,且不是.本身
    if (keyName.indexOf(".") != -1 && keyName != ".") {
        var keys = keyName.split("."); //使用.分离keyName
        var temp = dataObj;//设置临时变量,寻找最终值
        // console.log(keys);

        for (let i = 0; i < keys.length; i++) {
            // 每遍历一层,迭代更新一次变量(一层层剥)
            temp = temp[keys[i]];
        }
        return temp;
    }
    // 若不存在 . 
    return dataObj[keyName];
}
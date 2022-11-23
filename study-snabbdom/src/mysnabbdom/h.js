import vnode from "./vnode";
// 编写一个低配版本的h函数，这个函数必须接受3个参数，缺一不可
// 相当于它的重载功能较弱。
// 也就是说，调用的时候形态必须是下面的三种之一：
// 形态① h('div', {}, '文字')
// 形态② h('div', {}, [])
// 形态③ h('div', {}, h())
// h函数执行的结果一定是对象;不用再执行h函数了(测试语句已执行)
export default function (sel, data, c) {
    // 检查参数个数
    if (arguments.length != 3) {
        throw new Error("对不起,h函数必须传入3个参数,我们是低配h函数")
    }
    // 检查参数c的类型
    if (typeof c == "string" | "number") {
        // 形态①
        return vnode(sel, data, undefined, c, undefined);
    } else if (Array.isArray(c)) {
        // 形态② 是数组
        let children = [];
        // 遍历c,收集children
        for (let i = 0; i < c.length; i++) {
            // 若c[i]不是一个对象,报错  
            if (!(typeof c[i] == "object" && c[i].hasOwnProperty("sel"))) {
                throw new Error("传入的数组参数类型有误");
            }
            // 不用再执行h函数了(测试语句已执行),此时只要收集就好
            children.push(c[i]);
        }
        //循环结束,children收集完毕,返回带有children属性的虚拟节点 
        return vnode(sel, data, children, undefined, undefined);
    } else if (typeof c == "object" && c.hasOwnProperty("sel")) {
        // 形态③,即传入c是唯一的children,不用再执行c了(测试语句已执行)
        let children = [c];
        return vnode(sel, data, children, undefined, undefined);
    } else {
        throw new Error("传入的第三个参数类型有误")
    }
}
import vnode from "./vnode";
import createElement from "./createElement";

export default function (oldVnode, newVnode) {
    // 判断传入的第一个参数,是dom节点还是虚拟节点
    if (oldVnode.sel == "" || oldVnode.sel == undefined) {
        // 传入的第一个参数是dom节点,此时将其包装为虚拟节点(选择器里将大写的标签名变为小写)
        // console.log(222, oldVnode);
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode);
        // elm:elmenmt 元素  sel:selector选择器
    }

    // 判断oldVnode和newVnode是不是同一个节点(标签和选择器是否相同)
    if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
        console.log("是同一个,进行精细化比较");
        // 判断新旧vnode是否是同一个对象
        if (oldVnode === newVnode) return;
        // 判断newVnode有没有text属性
        if (newVnode.text != undefined && 
                (newVnode.children == undefined || newVnode.children == 0)){
                // 新的有文字(newVnode.text不为空,children不为空或为0)
                console.log("newVnode有text属性");
            if(newVnode.text != oldVnode.text){
                // 如果newVnode.text和oldVnode.text不同,则让新的text写入老的elm的文本
                // 如果老的elm有children也会比替代消失
                oldVnode.elm.innerText = newVnode.text;
            }
        }else {
            console.log("newVnode有children,没有text属性");
            // 判断老的有无children
            if(oldVnode.children != undefined && oldVnode.children.length >0){
                // 最复杂:新老节点都有children(需提取方法递归调用)
            }else{
                // 新的有children,老的的只有text(去掉老的text,遍历newvnode添加children)
                oldVnode.elm.innerText = "";
                for (let i = 0; i < newVnode.children.length; i++) {
                    console.log(3333, newVnode.children[i]);
                    let dom = createElement(newVnode.children[i]); //函数返回dom元素
                    oldVnode.elm.appendChild(dom);
                }
            }
        }
    } else {
        console.log("不是同一个,暴力插入新的,删除旧的");
        // 创建节点并返回对应的元素elm
        let newVnodeElm = createElement(newVnode);
        // console.log(11, newVnodeElm);
        //插入到老节点之前(旧节点的父亲存在and新创建节点存在)
        if (oldVnode.elm.parentNode && newVnodeElm) {
            /* 父节点.insertBefore(新节点,旧节点)	现有的子元素之前插入一个新的子元素
                    旧节点.parentNode.insertBefore(新节点,旧节点) */
            oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
        }
        // 删除老节点
        oldVnode.elm.parentNode.removeChild(oldVnode.elm);
    }
}
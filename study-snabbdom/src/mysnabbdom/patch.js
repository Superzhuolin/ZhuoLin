import vnode from "./vnode";
import createElement from "./createElement";
import patchVnode from "./patchVnode";

export default function (oldVnode, newVnode) {
    // 首先判断传入的第一个参数,是dom节点还是虚拟节点
    if (oldVnode.sel == "" || oldVnode.sel == undefined) {
        // 传入的第一个参数是dom节点,此时将其包装为虚拟节点(选择器里将大写的标签名变为小写)
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode);
        // elm:elmenmt 元素  sel:selector选择器
    }
    
    // 判断oldVnode和newVnode是不是同一个节点(标签和选择器是否相同)
    if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
        // console.log("是同一个,进行精细化比较");
        patchVnode(oldVnode,newVnode);
    } else {
        console.log("不是同一个,暴力插入新的,删除旧的");
        // 创建dom节点并返回对应的元素elm
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
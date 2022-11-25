import createElement from "./createElement";
import updateChildren from "./updateChildren";

// 同一个节点:精细化比较
export default function patchVnode(oldVnode, newVnode) {
    // 判断新旧vnode是否是同一个对象
    if (oldVnode === newVnode) return; //直接返回
    if (newVnode.text != undefined &&
        (newVnode.children == undefined || newVnode.children == 0)) {
        // ①新节点有文字(newVnode.text不为空,children为空或为0)
        console.log("newVnode有text属性");
        if (newVnode.text != oldVnode.text) {
            // 如果newVnode.text和oldVnode.text不同,则让新的text写入老的elm的文本
            // 如果老的elm有children也会比替代消失
            console.log(oldVnode.elm); //<section>你好</section>
            oldVnode.elm.innerText = newVnode.text;
        }
    } else {
        console.log("newVnode有children,没有text属性");
        // ②新节点没有text属性,判断老的有无children
        if (oldVnode.children != undefined && oldVnode.children.length > 0) {
            // 2.1最复杂:新老节点都有children(需提取方法递归调用)
            // (parentElm,oldCh,newCh)
            updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);
        } else {
            // 2.2新的有children,老的的只有text(去掉老的text,遍历newvnode添加children)
            oldVnode.elm.innerText = "";    // 清空老的节点的内容
            // 遍历新的vnode的子节点，创建DOM，上树
            for (let i = 0; i < newVnode.children.length; i++) {
                let dom = createElement(newVnode.children[i]); //函数返回dom元素
                oldVnode.elm.appendChild(dom);
            }
        }
    }
}
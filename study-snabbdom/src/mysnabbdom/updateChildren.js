import createElement from "./createElement";
import patchVnode from "./patchVnode";

// 判断是否是同一个虚拟节点
function checkSameVnode(a, b) {
    return a.sel == b.sel && a.key == b.key;
}

// 新老节点都有children属性
export default function updateChildren(parentElm, oldCh, newCh) {
    console.log("我是updateChildren", oldCh, newCh);
    // 指针
    let oldStartIdx = 0;              //旧前指针
    let newStartIdx = 0;              //新前指针
    let oldEndIdx = oldCh.length - 1; //旧后指针
    let newEndIdx = newCh.length - 1; //新后指针
    // 节点
    let oldStartVnode = oldCh[0];       // 旧前节点
    let oldEndVnode = oldCh[oldEndIdx]; // 旧后节点
    let newStartVnode = newCh[0];       // 新前节点
    let newEndVnode = newCh[newEndIdx]; // 新后节点

    // 开始大while
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        console.log("※");
        if (checkSameVnode(oldStartVnode, newStartVnode)) {
            // ①新前旧前
            console.log("①新前旧前命中");
            patchVnode(oldStartVnode, newStartVnode); //
            oldStartVnode = oldCh[++oldStartIdx];  //start指针++
            newStartVnode = newCh[++newStartIdx];  //start指针++
        } else if (checkSameVnode(oldEndVnode, newEndVnode)) {
            // ②新后旧后
            console.log("②新后旧后命中");
            // 让旧节点变为新节点
            patchVnode(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];  //end指针--
            newEndVnode = newCh[--newEndIdx];  //end指针--
        } else if (checkSameVnode(oldStartVnode, newEndVnode)) {
            // ③新后与旧前
            console.log("③新后与旧前命中");
            patchVnode(oldStartVnode, newEndVnode); //diff两个节点
            // 当③新后与旧前命中时,移动节点。移动新前指向节点到老节点的旧后之后
            parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);//对比跟插入谁先后都可以
            // 如何移动节点？？插入一个已经在DOM树上的节点，它就会被移动
            oldStartVnode = oldCh[++oldStartIdx];  //start指针++
            newEndVnode = newCh[--newEndIdx];  //end指针--
        } else if (checkSameVnode(oldEndVnode, newStartVnode)) {
            // ④新前与旧后
            console.log("④新前与旧后命中");
            patchVnode(oldEndVnode, newStartVnode); //diff两个节点
            // 当④新前与旧后命中时,移动节点。移动新前指向节点到老节点的旧后之前
            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);//对比跟插入谁先后都可以
            // 如何移动节点？？插入一个已经在DOM树上的节点，它就会被移动
            oldEndVnode = oldCh[--oldEndIdx];  //end指针--
            newStartVnode = newCh[++newStartVnode];  //start指针++
        } else {
            // 都没有找到时
        }
    }
    // 继续看看有没有剩余的.循环结束了start还是比old小
    if (newStartIdx <= newEndIdx) {
        console.log("new还有剩余节点没处理");
        // 插入的标杆
        const before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
        for (let i = newStartIdx; i <= newEndIdx; i++) {
            // 往旧节点的标杆后遍历插入多出来的新结点
            // 虚拟结点newCh[i]需要用createElement变为dom结点
            parentElm.insertBefore(createElement(newCh[i]),before);
        }
    }else if(oldStartIdx <=oldEndIdx){
        console.log("old还有剩余结点没处理");
        // 批量删除oldStartIdx与oldEndIdx之间的项
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
            console.log(oldCh[i]);
            parentElm.removeChild(oldCh[i].elm);
        }
    }
}
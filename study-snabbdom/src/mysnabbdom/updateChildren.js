import patchVnode from './patchVnode.js';
import createElement from './createElement.js';

// 判断是否是同一个虚拟节点
function checkSameVnode(a, b) {
    return a.sel == b.sel && a.key == b.key;
};

export default function updateChildren(parentElm, oldCh, newCh) {
    console.log('新老节点都有children=>进行updateChildren');
    console.log('新老节点:',oldCh, newCh);

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

    let keyMap = null;

    // 开始大while了
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        console.log('★');
        // 首先不是判断①②③④命中，而是要略过已经加undefined标记的东西
        if (oldStartVnode == null || oldCh[oldStartIdx] == undefined) {
            oldStartVnode = oldCh[++oldStartIdx];
        } else if (oldEndVnode == null || oldCh[oldEndIdx] == undefined) {
            oldEndVnode = oldCh[--oldEndIdx];
        } else if (newStartVnode == null || newCh[newStartIdx] == undefined) {
            newStartVnode = newCh[++newStartIdx];
        } else if (newEndVnode == null || newCh[newEndIdx] == undefined) {
            newEndVnode = newCh[--newEndIdx];
        } else if (checkSameVnode(oldStartVnode, newStartVnode)) {
            console.log('①新前和旧前命中');
            patchVnode(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx]; //start指针++
            newStartVnode = newCh[++newStartIdx]; //start指针++
        } else if (checkSameVnode(oldEndVnode, newEndVnode)) {
            console.log('②新后和旧后命中');
            patchVnode(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];  //end指针--
            newEndVnode = newCh[--newEndIdx];  //end指针--
        } else if (checkSameVnode(oldStartVnode, newEndVnode)) {
            console.log('③新后和旧前命中');
            patchVnode(oldStartVnode, newEndVnode);
            // 当③新后与旧前命中时=>移动新后节点(即旧前节点)到老节点的旧后之后
            // 如何移动节点？？只要你插入一个已经在DOM树上的节点，它就会被移动
            parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx]; //start指针++
            newEndVnode = newCh[--newEndIdx];     //end指针--
        } else if (checkSameVnode(oldEndVnode, newStartVnode)) {
            console.log('④新前和旧后命中');
            patchVnode(oldEndVnode, newStartVnode);
            // 当④新前和旧后命中时=>移动新前节点(即旧后节点)到老节点的旧前之前
            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
            // 如何移动节点？？只要你插入一个已经在DOM树上的节点，它就会被移动
            oldEndVnode = oldCh[--oldEndIdx];     //end指针--
            newStartVnode = newCh[++newStartIdx]; //start指针++
        } else {
            // 四种命中都没有命中,遍历老节点,判断当前newStartNode是否在老节点中出现过
            // 制作keyMap:key与下标相互映射对象，这样就不用每次都遍历老对象了。
            if (!keyMap) { //若keyMap为空(起始为null)
                keyMap = {};
                // 从oldStartIdx开始，到oldEndIdx结束，创建keyMap映射对象
                for (let i = oldStartIdx; i <= oldEndIdx; i++) {
                    const key = oldCh[i].key;
                    if (key != undefined) {
                        keyMap[key] = i;  //让key和下标相互映射
                    }
                }
            }
            console.log(keyMap);
            /* 
            ①取出新老节点进行比较更新,即找到newStartNode在 oldChildren中下标idxInOld比如为 k,
            ②调用 patchVNode( oldChildren[k], newStartNode) 进行节点的更新处理
            ③令当前oldChildren[k]=undefined，下次循环时候如果遇到undefined就增加判断提跳过处理
            ④在当前oldStartVNode.elm前插入这个节点信息（也就是插入到未处理的节点的前面），
                然后更新指针++newStartIndex 以及 newStartNode*/
            // 寻找当前这项（newStartIdx）在keyMap中的映射的位置序号k,若没有则是新增项
            const idxInOld = keyMap[newStartVnode.key];  //获取新节点的key在老节点中的下标位置
            console.log(idxInOld);
            if (idxInOld == undefined) {
                // idxInOld=undefined=>新节点中的key,旧节点中没有=>是新增项,需插入旧前之前
                // 被加入的项newStartVnode是虚拟节点,需转换为dom再插入
                parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm);
            } else {
                // 如果不是undefined,不是全新的项=>要移动
                const elmToMove = oldCh[idxInOld];  //oldCh在下标k中的虚拟dom
                patchVnode(elmToMove, newStartVnode); //同一个节点=>精细化比较
                // 把这项设置为undefined，表示我已经处理完这项了
                oldCh[idxInOld] = undefined;
                // 移动，调用insertBefore也可以实现移动。
                parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm);
            }
            newStartVnode = newCh[++newStartIdx];// 移动新前节点,新前指针++
        }
    }

    // 继续看看有没有剩余的。循环结束了start还是比old小
    if (newStartIdx <= newEndIdx) {         //加项
        console.log('new还有剩余节点没有处理,把所有剩余的节点插入到oldStartIdx之前');
        // 遍历新的newCh，添加到老的没有处理的之前
        for (let i = newStartIdx; i <= newEndIdx; i++) {
            // insertBefore方法可以自动识别null，如果是null就会自动排到队尾去。和appendChild是一致了。
            // newCh[i]现在还没有真正的DOM，所以要调用createElement()函数变为DOM
            parentElm.insertBefore(createElement(newCh[i]), oldCh[oldStartIdx].elm);
        }
    } else if (oldStartIdx <= oldEndIdx) {  //删项
        console.log('old还有剩余节点没有处理,要删除项');
        // 批量删除oldStart和oldEnd指针之间的项
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
            if (oldCh[i]) {
                parentElm.removeChild(oldCh[i].elm);
            }
        }
    }
};
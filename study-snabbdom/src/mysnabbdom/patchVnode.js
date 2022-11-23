import createElement from "./createElement";

export default function patchVnode(oldVnode, newVnode){
    // 判断新旧vnode是否是同一个对象
    if (oldVnode === newVnode) return;
    // 判断newVnode有没有text属性
    if (newVnode.text != undefined &&
        (newVnode.children == undefined || newVnode.children == 0)) {
        // 新的有文字(newVnode.text不为空,children不为空或为0)
        console.log("newVnode有text属性");
        if (newVnode.text != oldVnode.text) {
            // 如果newVnode.text和oldVnode.text不同,则让新的text写入老的elm的文本
            // 如果老的elm有children也会比替代消失
            oldVnode.elm.innerText = newVnode.text;
        }
    } else {
        console.log("newVnode有children,没有text属性");
        // 判断老的有无children
        if (oldVnode.children != undefined && oldVnode.children.length > 0) {
            // 最复杂:新老节点都有children(需提取方法递归调用)
            let un =0; //所有未处理结点开头
            for (let i = 0; i < newVnode.children.length; i++) {
                let ch = newVnode.children[i];
                // 再次遍历,查看oldVnode有没有结点跟它是same的
                let isExist = false;
                for (let j = 0; j < oldVnode.children.length; j++) {
                    if (oldVnode.children[j].sel == ch.sel 
                    &&  oldVnode.children[j].key == ch.key){
                        isExist = true;
                    }
                }
                // 存在不一样的结点
                if(!isExist){
                    console.log(ch,i);
                    let dom = createElement(ch);//将虚拟结点创建为dom
                    ch.elm =dom;    //并将新结点的子节点的元素变为该dom
                    // console.log(dom);  //输出此dom
                    if(un<oldVnode.children.length){
                        oldVnode.elm.insertBefore(dom,oldVnode.elm.children[un])
                    }else{
                        oldVnode.elm.appendChild(dom);
                    }

                }else{
                    //存在相同结点,让处理结点下移
                    un++;
                    // 位置不同
                    if(i != j){
                        
                    }
                }
            }
        } else {
            // 新的有children,老的的只有text(去掉老的text,遍历newvnode添加children)
            oldVnode.elm.innerText = "";
            for (let i = 0; i < newVnode.children.length; i++) {
                console.log(3333, newVnode.children[i]);
                let dom = createElement(newVnode.children[i]); //函数返回dom元素
                oldVnode.elm.appendChild(dom);
            }
        }
    }
}
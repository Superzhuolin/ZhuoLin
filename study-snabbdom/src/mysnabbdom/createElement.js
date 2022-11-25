
//将传入的虚拟节点创建为孤儿dom节点,但不进行插入
        // elm:elmenmt 元素  sel:selector选择器
export default function createElement(vnode){
    // console.log('目的:将虚拟节点',vnode,"真正变为dom");
    /* document.createElement("元素节点")	 创建元素节点
				为传入的一个标签名参数创建元素节点对象,并将其返回 */
    let domNode = document.createElement(vnode.sel); //创建孤儿dom节点,存储结果
    // 判断有子结点还是有文字
    if (vnode.text != "" && (vnode.children == undefined || vnode.children == 0 )){
        // 是文字
        domNode.innerText = vnode.text; //将dom节点的内部文字设为虚拟dom中文字
    }else if (Array.isArray(vnode.children) && vnode.children.length>0){
        // 内部是子节点,需要递归创建节点,遇见文本递归结束,并加入dom结点
        for (let i = 0; i < vnode.children.length; i++) {
            // 得到当前这个children
            let ch = vnode.children[i];     
            //递归创建节点,并且使其elm属性指向创建出的dom(还未上树,是孤儿节点)
            let chDom = createElement(ch);  //子节点
            // 上树,插入子节点
            domNode.appendChild(chDom);     
        }
    }
    // 补充dom节点的elm元素
    vnode.elm = domNode;
    // console.log(121,vnode.elm);
    // 返回纯dom对象elm
    return vnode.elm;
}
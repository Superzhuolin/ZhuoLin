function addEventListener(el,type,fn,selector){
    // 判断el的类型
    if(typeof el ==="string"){
        el = document.querySelector(el);
    }
    //若没有传子元素selector  会给整个el绑定事件
    if(!selector){
        el.addEventListener(type,fn);
    } else {// 若传了子元素selector   则会做事件委托
        el.addEventListener(type,function(e){
            const target = e.target;// 获取点击目标事件源
            // console.log(target);
            //判断点击的子元素与传入子元素是否匹配
            if(target.matches(selector)){
                // 若符合则调用回调  并指定所点元素为this指向
                fn.call(target,e)
            }
        })
    }
    
}
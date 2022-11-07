export default class Compile{
    constructor(el,vue){
        // 挂载点
        this.$el = document.querySelector(el);
        // vue实例
        this.vue = vue;
        // 如果用户传入了挂载点
        if(this.$el){
            // 调用函数让节点变为fragement(mustache中的token)
            let $fragment = this.node2Fragment(this.$el);//实际用的是AST,此处是轻量级的
            // 编译
            this.compile($fragment);
        }
    }
    // 让节点变为fragemen
    node2Fragment(el){
        var fragment = document.createDocumentFragment();
        var child;
        // 让所有节点都进入fragment
        while(child = el.firstChild){
            //把元素放入fragment,则dom上的真实节点将消失
            // 下一次遍历,由于上一次的firstChild消失被下一个替代,所以就会不断往下剥洋葱
            fragment.appendChild(child);
        }
        return fragment;
    }

    // vue底层是虚拟节点和diff,此处使用fragment简写
    compile(el){
        console.log(el);
        // 得到子元素
        var childNodes = el.childNodes;
        // console.log(childNodes);// [text, div, text]
        var self = this;

        childNodes.forEach(node =>{

            if (node.nodeType == 1){
                self.compileElement(node);
            }else if(node.nodeType == 3){

            }
        })
    }

    compileElement(node){
        console.log(node); //页面展示的html结构
        // 这里的方便之处在于不是讲html结构看作字符串,而是真正的属性列表
        var nodeAttrs = node.attributes;
        // console.log(nodeAttrs);
        // 类数组对象变为数组   (遍历标签中的属性)
        [].slice.call(nodeAttrs).forEach(attr =>{
            // 分析指令
            var attrName = attr.name;  //标签属性名
            var value = attr.value; //标签属性值

            var dir = attrName.substring(2);  //获取指令的名称
            // 若指令都是以v-开头的
            if(attrName.indexOf("v-") ==0){
                if(dir == "model"){//双向数据绑定(需要事件监听)
                    console.log("发现了model指令",value );
                }else if(dir == "if"){
                    console.log("发现了if指令", value);
                }
            }
        });
        
    }

    compileText(){

    }
}
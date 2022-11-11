import {
    init,
    classModule,    //类模块
    propsModule,    //属性模块
    styleModule,    //样式模块
    eventListenersModule,  //事件监听模块
    h,
} from "snabbdom";

// 创建处patch函数 
const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

// 创建虚拟节点
const myVnde1 = h("a", { props: { href: "http://www.atguigu.com", target: "_blank" } }, "尚硅谷");
// console.log(myVnde1);
const myVnde2 = h("div", "我是一个div节点");
const myVnde3 = h("ul", { class: { "box": true } }, [  //若有子元素,可以用数组嵌套
    h("li", "苹果"),
    h("li", [
        h("div", [
            h("p", "嘿嘿"),
            h("p", "嘻嘻")
        ])
    ]),
    h("li", "雪梨"),
    h("li", h("span", "火龙果")),  //若只有一个子元素,则数组可省略(多个只显示第二个)
]);

console.log(myVnde2);
console.log(myVnde3);
// 让虚拟节点上树(为什么虚拟节点可以上树)
const container = document.getElementById("container");
patch(container, myVnde3); 
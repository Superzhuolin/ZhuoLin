import h from "./mysnabbdom/h"

var myVnode1 = h("div", {}, [
    h("p", {}, "嘿嘿"),
    h("p", {}, "哈哈"),
    h("p", {}, [
        h("span", {}, "A"),
        h("span", {}, "B"),
    ]),
    h("p", {}, h("p", {}, "dd"),),
]);
const myVnode2 = h("ul", { class: { "box": true } }, [  //若有子元素,可以用数组嵌套
    h("li", {}, "苹果"),
    h("li", {}, [
        h("div", {}, [
            h("p", {}, "嘿嘿"),
            h("p", {}, "嘻嘻")
        ])
    ]),
    h("li", {}, "雪梨"),
    h("li", {}, h("span", {}, "火龙果")),  //若只有一个子元素,则数组可省略(多个只显示第二个)
]);

console.log(myVnode2);
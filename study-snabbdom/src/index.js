import h from "./mysnabbdom/h"
import patch from "./mysnabbdom/patch"

// 使用函数创建虚拟dom
const myVnode1 = h("section", {}, [
    h("p", { key: "A" }, "A"),
    h("p", { key: "B" }, "B"),
    h("p", { key: "C" }, "C"),
    h("p", { key: "D" }, "D"),
    h("p", { key: "E" }, "E"),
]);
// const myVnode1 = h("section",{},"老dom,破文字,无子节点");

// 获取盒子和按钮
const container = document.getElementById("container");
const btn = document.getElementById("btn");

patch(container, myVnode1);
// const myVnode2 = h("section", {}, "你好");
// const myVnode2 = h("section", {}, [
//     h("p", { key: "A" }, [
//         h("p",{},"嘻嘻"),
//         h("p",{},"哈哈"),
//         h("p",{},"嘿嘿"),
//     ]),
//     h("p", { key: "B" }, "B"),
//     h("p", { key: "C" }, "C"),
// ]);
const myVnode2 = h("section", {}, [
    h("p", { key: "B" }, "B"),
    h("p", { key: "C2" }, "C2"),
    h("p", { key: "Q" }, "Q"),
    h("p", { key: "C1" }, "C1"),
    h("p", { key: "A" }, "A"),
    h("p", { key: "C" }, "C"),
    h("p", { key: "C3" }, "C3"),
]);
btn.onclick = function () {
    patch(myVnode1, myVnode2);
}


//
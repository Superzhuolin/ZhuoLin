import h from "./mysnabbdom/h"
import patch from "./mysnabbdom/patch"

const myVnode1 = h("section", {}, [
    h("p", { key: "A" }, "A"),
    h("p", { key: "B" }, "B"),
    h("p", { key: "C" }, "C"),
]);
// const myVnode1 = h("section",{},"老dom,破文字,无子节点");
console.log(myVnode1);
// 获取盒子和按钮
const container = document.getElementById("container");
const btn = document.getElementById("btn");

patch(container, myVnode1);
// const myVnode2 = h("section", {}, "你好");
const myVnode2 = h("section", {}, [
    h("p", { key: "A" }, "A"),
    h("p", { key: "B" }, "B"),
    h("p", { key: "M" }, "M"),
    h("p", { key: "N" }, "N"),
    h("p", { key: "C" }, "C"),
    h("p", { key: "P" }, "P"),
    h("p", { key: "Q" }, "Q"),
]);

btn.onclick = function () {
    patch(myVnode1, myVnode2);
}
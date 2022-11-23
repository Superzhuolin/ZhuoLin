import h from "./mysnabbdom/h"
import patch  from "./mysnabbdom/patch"

// const myVnode1 = h("section",{},[
//     h("p",{},"A"),
//     h("p",{},"B"),
//     h("p",{},"C"),
// ]);
const myVnode1 = h("section",{},"老dom,破文字,无子节点");

// 获取盒子和按钮
const container = document.getElementById("container");
const btn = document.getElementById("btn");

patch(container,myVnode1);
// const myVnode2 = h("section", {}, "你好");
const myVnode2 = h("section",{},[
    h("p",{},"A"),
    h("p",{},"B"),
    h("p",{},"C"),
]);

btn.onclick = function(){
    patch(myVnode1,myVnode2);
}
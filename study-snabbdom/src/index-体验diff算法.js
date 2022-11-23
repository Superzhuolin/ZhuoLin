import { init } from 'snabbdom/init';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { h } from 'snabbdom/h';

// 得到盒子和按钮
const container = document.getElementById("container");
const btn = document.getElementById("btn");

// 创建处patch函数    patch:修补
const patch = init([classModule, propsModule, styleModule, eventListenersModule]);


//key是唯一标识,提升算法效率
const vnode1 = h("ul", { key: "ul" }, [
    h("li", { key: "A" }, "A"),
    h("li", { key: "B" }, "B"),
    h("li", { key: "C" }, "C"),
    h("li", { key: "D" }, "D"),
])

patch(container, vnode1);

const vnode2 = h("Ol", { key: "ol" }, [
    h("li", {}, "E"),
    h("li", { key: "A" }, "A"),
    h("li", { key: "B" }, "B"),
    h("li", { key: "C" }, "C"),
    h("li", { key: "D" }, "D"),
])

// 点击按钮时,将vnode1变为vnode2
btn.onclick = function () {
    patch(vnode1, vnode2);
}




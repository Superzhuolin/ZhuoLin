import Compile from "./Compile";

export default class Vue {
    constructor(option) {
        // 把参数option对象存为$option
        this.$options = option || {};
        // 数据
        this._data = option.data || undefined;
        // 数据变为响应式
        new Compile(option.el,this); 
    }
}

import Compile from "./Compile";
import observe from "./observe";
import Watcher from "./Watcher"

export default class Vue {
    constructor(options) {
        // 把参数option对象存为$option
        this.$options = options || {};
        // 数据
        this._data = options.data || undefined;
        observe(this._data);
        // 默认数据变为响应式,类似于生命周期
        this._initData();
        this._initWatch();
        // 模板编译
        new Compile(options.el,this); 
    }
    _initData(){
        var self = this;
        Object.keys(this._data).forEach(key =>{
            Object.defineProperty(self,key,{
                get(){
                    return self._data[key];
                },
                set(newVal){
                    self._data[key] = newVal;
                }
            })
        })
    }
    _initWatch(){
        var self = this;
        var watch = this.$options.watch;
        Object.keys(watch).forEach(key =>{
            new Watcher(self,key,watch[key]);
        })
    }
}

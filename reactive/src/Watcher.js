var uid = 0;

// 保存每次Watcher东西的回调函数,数组中要保存拥有watcher的dep
export default class Watcher {
    //1.监听对象  2.监听对象的表达式 a.b.c 3.
    constructor(target,expression,callback){
        console.log("我是Watcher的构造器");
        this.id = uid++;
        this.target = target;
        this.getter = parsePath(expression); // vue源码中的函数,exp是watcher的构造器
        this.callback = callback;
        this.value = this.get();
    }
    update(){

    }
    get(){
        // 进入依赖收集阶段.让全局的Dep.target设置为watcher本身,则进入依赖收集阶段
    }

/* 当决定某个watcher要放在那个dep时,需要让dep先读取数据(让变量指向watcher),
    然后在代码中使用该变量,就会触发getter.从而对该键进行求值触发一连串getter
    (内层嵌套),从而找到该watcher是管那个data的,最后需要将全局变量改回null  */
}; 

// str:要寻求值的属性 obj:被寻求属性值的对象
function parsePath(str) {
    var segments = str.split(".");
    // 返回接受对象的函数 
    // 高阶函数:函数内部返回函数(该函数内部又返回对象),  
    return (obj) => {
        // console.log(obj);
        for (let i = 0; i < segments.length; i++) {
            if (!obj) return;  //防止obj不存在
            obj = obj[segments[i]];
        }
        return obj;
    };
}
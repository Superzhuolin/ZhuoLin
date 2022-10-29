// Dep出现在每个对象层面的__ob__的里面
var uid = 0;
export default class Dep{  //发布订阅模式
    constructor() {
        console.log("我是Dep的构造器");
        this.id= uid++; //让每个实例化对象都有自己的Id
        //用数组存储订阅者.subscribes 
        // 存放的是watcher实例
        this.subs = [];
    }
    //添加订阅 
    addSub(sub){
        this.subs.push(sub);
    }
    // 添加依赖
    depend(){
        // Dep.target为指定的全局位置(window.target也可),要求唯一且无歧义
        if(Dep.target){
            // 将dep的位置推入到subs中
            // 将当前那个watcher触发的getter,然后进行依赖收集

            // getter会将全局唯一的dep.target读取  正读取数据的watcher
            //并把watcher收集到dep中
            this.addSub(Dep.target);
        }
    }
 
    // 通知更新
    notify(){
        console.log("我是notify");
        // 浅克隆
        const subs = this.subs.slice();
        // 遍历
        for (let i = 0,l=subs.length; i < l; i++) {
            subs[i].update();
        }
    }
};
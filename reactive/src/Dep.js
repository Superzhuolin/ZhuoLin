// Dep出现在每个对象层面的__ob__的里面
export default class Dep{  //发布订阅模式
    constructor() {
        console.log("我是Dep的构造器");
    }
    notify(){
        console.log("我是notify");
    }
};
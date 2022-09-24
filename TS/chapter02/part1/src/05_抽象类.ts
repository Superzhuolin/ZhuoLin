(function(){
    /* abstract抽象类   
            1.被继承的类(不能实例化对象)
            2.可以添加抽象方法
     */
    abstract class Animal{
        name:string;
        constructor(name:string){
            this.name=name;
        }

        /* 
            抽象方法:
                1.以abstract开头,没有方法体
                2.只能定义在抽象类中,子类必须对抽象方法进行重写
        */
        abstract sayHello():void;
    }

    class Dog extends Animal{

        sayHello(): void {
            console.log("狗叫"); 
        }
    }

    const dog = new Dog("旺财");
    // const animal = new Animal();     //抽象类无法创建实例
    dog.sayHello();
})()
"use strict";
(function () {
    /* abstract抽象类
            1.被继承的类(不能实例化对象)
            2.可以添加抽象方法
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log("狗叫");
        }
    }
    const dog = new Dog("旺财");
    // const animal = new Animal();     //抽象类无法创建实例
    dog.sayHello();
})();

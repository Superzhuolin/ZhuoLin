"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("动物叫~~");
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 子类的构造函数必须使用super对父类进行调用
            super(name); //调用父类构造函数,并指定参数
            this.age = age;
        }
        sayHello() {
            // 在类的方法中super表示当前类的父类
            super.sayHello();
            console.log("狗叫");
        }
    }
    const dog = new Dog("旺财", 11);
    dog.sayHello();
})();

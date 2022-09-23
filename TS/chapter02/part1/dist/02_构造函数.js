"use strict";
class Dog {
    // constructor 构造函数 对象创建时使用，并对属性进行赋值
    constructor(name, age) {
        // 在实例方法中,this表示当前的类的实例
        // 则可以通过this向新建对象添加属性
        this.name = name;
        this.age = age;
    }
    bark() {
        // this指向调用该方法的实例，即调用该方法的对象
        // 
        console.log(this.name);
    }
}
/* 调用 new Dog() 就会调用构造函数 */
const dog = new Dog("小黑", 1);
const dog2 = new Dog("小白", 2);
// console.log(dog);
dog2.bark();

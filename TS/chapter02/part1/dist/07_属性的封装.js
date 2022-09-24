"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // // 定义方法获取属性
        // getName(){
        //     return this.name
        // }
        // getAge(){
        //     return this.age;
        // }
        // // 定义方法修改属性
        // setName(value:string){
        //     this.name=value;
        // }
        // setAge(value:number){
        //     if(value>0){
        //         this.age=value;
        //     }
        // }
        // TS中设置getter方法的方式
        get name() {
            // console.log("get name()执行了");
            return this._name;
        }
        get age() {
            return this._age;
        }
        set name(value) {
            this._name = value;
        }
        set age(value) {
            if (value > 0) {
                this._age = value;
            }
        }
    }
    const per = new Person("孙悟空", 13);
    // 数据不安全:属性可以被任意修改
    // per.name="猴子";
    // per.age=1;
    // per.setName("猪八戒");
    // per.setAge(-30);
    //表面执行属性,实际执行方法 
    per.name = "猪八戒";
    per.age = -11;
    // console.log(per.name);  //执行get name()方法
    // console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // b.num=33;//不能访问
    // class C{
    //     name:string;
    //     age:number;
    //     // 可以直接将属性定义在构造函数中
    //     constructor(name:string,age:number){
    //         this.name=name;
    //         this.age=age;
    //     }
    // }
    //简化上式
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C("你好", 11);
    console.log(c);
})();

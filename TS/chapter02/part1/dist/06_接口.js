"use strict";
(function () {
    // 接口实现
    class Myclass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("你好~");
        }
    }
    function fn(per) {
        per.sayHello();
    }
    fn({
        name: '孙悟空',
        sayHello() {
            console.log(`Hello, 我是 ${this.name}`);
        }
    });
    // interface Person5 {
    //     name: string;
    //     age?: number;
    //     [propName: string]: any;
    // }
    // let pr5: Person5 = {
    //     name: '胖芮',
    //     11: true,
    //     11: '杭州'
    // }
})();

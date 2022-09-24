// 避免函数名冲突  常用立即执行函数
(function(){
    // 定义动物类
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log("动物在叫!!");
        }
    }


    // 定义一个表示狗的类
    class Dog extends Animal{
        // 多态
        run(){
            console.log(`${this.name}在跑~~~`);
        }
        // 重写
        sayHello() {
            console.log("汪汪");
        }
    }

    class Cat extends Animal {
        sayHello() {
            console.log("喵喵~~~");
        }
    }


    const dog = new Dog("旺财",3);
    const cat = new Cat("咪咪",2); 
    
    console.log(dog);
    console.log(cat);
    dog.run();
    dog.sayHello();
    cat.sayHello();
    
  

})();
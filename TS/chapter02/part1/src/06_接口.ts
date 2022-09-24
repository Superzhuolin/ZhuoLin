(function(){
    // 描述对象的类型
    type myType = {
        name:string,
        age:number
    };

    // 接口:      接口可以重复声明
    //定义类的结构,即应该包含那些属性方法,同时接口可以当成类型声明使用
    interface myInterface{
        name: string,
        age: number
    }
    interface myInterface{
       gender:string;
    }


    /* 
        接口可以定义类时限制类的结构:
            接口中的所有属性都不能有实际值,接口只定义对象的结构,而不能有实际值
    */
  
    interface myInter{
        name:string;
        sayHello():void;
    }
    // 接口实现
    class Myclass implements myInter {
        name: string;
        constructor(name:string){
            this.name=name;
        }
        sayHello(): void {
            console.log("你好~");
        }
    }

    interface Person {
        name: string;
        sayHello(): void;
    }

    function fn(per: Person) {
        per.sayHello();
    }

    fn({ 
        name: '孙悟空', 
        sayHello() { 
            console.log(`Hello, 我是 ${this.name}`) 
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

})()
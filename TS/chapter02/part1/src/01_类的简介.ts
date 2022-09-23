// 使用class关键字定义一个类

/* 
    对象中主要包含两个部分:
      1.属性
      2.方法
*/
class Person{
    /* 
        直接定义的属性是实例属性,需要通过实例去访问:
            const per = new Person();
            per.name
        
        使用static关键字开头的是静态属性(类属性),可以直接通过类去访问
            Person.age
        
        readonly开头 表示只读属性,无法进行修改(static在前)
    */

    // 定义实例属性
    // readonly name:string ="孙悟空";
    name ="孙悟空";

    // 定义类属性(静态方法)   属性前添加static关键字
    // static readonly age:number =18;
    age = 12;

    // 定义方法
    // 以static开头则是类方法,可直接用类调用
    static sayHollo(){
        console.log("大家好");
    }
}
const per = new Person();
// console.log(per);
// console.log(Person.age);

// console.log(per.name);
// per.name = "tom";
// console.log(per.name);

// console.log(Person.age);
// Person.age = 14;
// console.log(Person.age);

// per.sayHollo();
Person.sayHollo();


// import observe from './observe.js';
// import Watcher from './Watcher.js';

var obj={};
/* Object.defineProperty()方法会直接在一个对象上定义一个新属性，
或者修改一个对象的现有属性，并返回此对象。 
1.定义对象 2.定义属性 3.定义属性值*/
Object.defineProperty(obj, "a", {
    value: 3
})
Object.defineProperty(obj, "b", {
    value: 5
}
)
console.log(obj);
console.log(obj.a, obj.b);
/**
 * 创建Fn构造函数的实例对象
 * @param {Function} Fn 
 * @param  {...any} args 
 */
function newInstance(Fn, ...args) { //Fn构造函数
    // 1.创建一个对象
    const obj ={};
    obj._proto_ = Fn.prototype;// 修改新对象的原型指向
    // 2.修改函数内部this指向新对象 并执行
    const result = Fn.call(obj,...args);
    console.log(obj);
    console.log(result);
    
    // 3.若Fn返回的是一个对象类型, 那返回的就不再是obj, 而是Fn返回的对象
    // 否则返回obj
    return result instanceof Object?result:obj;
}
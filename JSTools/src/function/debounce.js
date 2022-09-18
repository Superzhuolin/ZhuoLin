/* 防抖与节流作用:控制事件回调执行的频率
区别:  
防抖:事件触发后会等待一段时间再执行回调,若在等待中又被触发
则会再次等待(上个事件不执行),即频繁触发时只会触发最后一个回调
*/

function debounce(callback,time){
    // 定时器变量
    let timeId = null;
    
    // 返回函数:不然无法调用回调
    return function(e){ //传入事件对象:因为回调函数需要用来传参
        // 判断
        if(timeId !== null){  //说明之前有定时器在执行
            clearTimeout(timeId);// 清空定时器
        }
        // 启动定时器
        timeId =setTimeout(()=>{
            // 执行回调
            callback.call(this, e);//箭头函数this指向外层作用域下this值
            timeId=null;//重装定时器变量
        },time)
        
        
    }
}
import Observer from './Observer';

/* 逐层往下oberver递归  递归到最后一层结束 */
// 创建observer函数,注意函数的名字没r
// 参数value是要侦测的对象  value传入的值实际上是defineReative中闭包的val
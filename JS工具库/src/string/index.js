function reverseString(str){
    //将字符串转为数组
    // let arr = str.split("");  //方法一:使用split方法
    let arr =[...str]; //方法二:使用拓展运算符
    arr.reverse(); //翻转数组
    // console.log(arr);
    let s = arr.join(""); //将数组用拼接成字符串
    // console.log(s);
    return s;
}
function palindrome(str){
    return reverseString(str) === str;
}
function truncate(str,size){
    return str.slice(0,size)+"...";
}
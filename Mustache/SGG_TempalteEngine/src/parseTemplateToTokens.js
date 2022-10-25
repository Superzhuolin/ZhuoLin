import nestTokens from './nestTokens.js';
import Scanner from "./Scanner";

/* 
    将模板字符串变为tokens数组
*/ 
export default function parseTemplateToTokens(templateStr){
    var tokens=[];  //存储内容
    // 创建扫描器
    var scanner = new Scanner(templateStr);
    var words;
    // 扫描器工作
    while (!scanner.eos()) {
        words = scanner.scanUtil("{{"); // 收集开始标记之前文字
       
        if(words !=""){
            // 去掉空格，智能判断是普通文字的空格，还是标签中的空格
            // 标签中的空格不能去掉，比如<div class="box">不能去掉class前面的空格
            let isJJH = false; //是否在尖角号<> 里面 ,默认不在
            var _words = ""; // 空白字符串
            for (let i = 0; i < words.length; i++) {
                // 判断是否在标签中
                if (words[i] == "<") {
                    isJJH = true;
                } else if (words[i] == ">") {
                    isJJH = false;
                }
                // 如果这项不是空格,拼接上  \s 空格  \S非空格
                if(!/\s/.test(words[i])){
                    _words += words[i];
                }else{
                    //是空格,只有在当它在标签内时,才拼接上
                    if(isJJH){
                        _words += words[i];
                    }
                }
            }
            // console.log(words);
            // console.log(_words);
            tokens.push(["text",_words]);//把去掉空格的文字存起来
        }
        scanner.scan("{{"); //过双大括号

        words = scanner.scanUtil("}}"); // 收集属性名
        if (words != "") {
            // 这个words就是{{}}中间的东西。判断一下首字符
            if(words[0] == "#"){ //循环属性
                // 存起来，从下标为1的项开始存，因为下标为0的项是#
                tokens.push(["#",words.substring(1)]);
            }else if(words[0]=="/"){ //循环属性
                tokens.push(["/",words.substring]);
            }else{//正常属性
                tokens.push(["name",words]);//存起来
            }
        }
        scanner.scan("}}"); //过双大括号
    }
    // 返回折叠的tokens
    return nestTokens(tokens);
}
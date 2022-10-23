import nestTokens from './nestTokens.js';
import Scanner from "./Scanner";

/* 
    将模板字符串变为tokens数组
*/ 
export default function parseTemplateToTokens(templateStr){
    var tokens=[];
    // 创建扫描器
    var scanner = new Scanner(templateStr);
    var words;
    // 扫描器工作
    // console.log(templateStr);/*  */
    while (!scanner.eos()) {
        words = scanner.scanUtil("{{"); // 收集开始标记之前文字
       
        if(words !=""){
            tokens.push(["text",words]);//存起来
        }
        scanner.scan("{{"); //过双大括号

        words = scanner.scanUtil("}}"); // 收集开始标记之前文字
        if (words != "") {
            // 这个words就是{{}}中间的东西。判断一下首字符
            if(words[0] == "#"){
                // 存起来，从下标为1的项开始存，因为下标为0的项是#
                tokens.push(["#",words.substring(1)]);
            }else if(words[0]=="/"){
                // 存起来，从下标为1的项开始存，因为下标为0的项是/
                tokens.push(["/",words.substring]);
            }else{
                tokens.push(["name",words]);//存起来
            }
        }
        scanner.scan("}}"); //过双大括号
    }
    // 返回折叠的tokens
    return nestTokens(tokens);
}
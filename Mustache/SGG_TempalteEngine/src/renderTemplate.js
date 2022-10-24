import lookup from './lookup.js';
import parseArray from './parseArray.js';
/* 
    函数的功能是让tokens数组变为dom字符串
*/
export default function renderTemplate(tokens, data) {
    console.log(tokens);
    var resultStr = "";  //结果字符串
    // 遍历tokens
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        // console.log(token);
        // 看类型
        if (token[0] == 'text') {
            // 拼起来
            resultStr += token[1];
        } else if (token[0] == "name") {
            // resultStr += data[token[1]];
            resultStr += lookup(data, token[1]);
        }
    }
    console.log(resultStr);
    return resultStr;
}
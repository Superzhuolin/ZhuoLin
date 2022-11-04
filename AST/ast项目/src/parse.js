import parseAttrsString from "./parseAttrsString";
// parse函数
export default function (templateString) {
    var index = 0; // 指针
    var rest = ""; //剩余部分
    //准备出入栈
    var stack1 = []; //存放标签名
    var stack2 = [{ "children": [] }]; //存放""
    var startRegExp = /^\<([a-z]+[1-6]?)(\s[^\<]+)?\>/;   // 开始标记
    var endRegExp = /^\<\/([a-z]+[1-6]?)\>/;   // 结束标记
    // 点.	查找单个字符，除了换行和行结束符。
    var wordRegExp = /^([^\<]+)\<\/[a-z]+[1-6]?\>/;   //结束标记前的文字

    while (index < templateString.length - 1) {
        // console.log(templateString[index]);
        rest = templateString.substring(index);
        if (startRegExp.test(rest)) {            //开始标记
            let tag = rest.match(startRegExp)[1];
            let attrsString = rest.match(startRegExp)[2];
            stack1.push(tag);   // 将tag推入stack1
            stack2.push({ "tag": tag, "children": [], "attrs": parseAttrsString(attrsString) }); // 将对象推入stack2
            // console.log("检测到开始标记:", tag);
            // 得到attrsString的长度
            const attrsStringLength = attrsString!=null? attrsString.length:0; 
            // 指针移动标签的长度加2( >< 也占两位)再加attrString的长度
            index += tag.length + attrsStringLength + 2;
            // console.log(stack1, stack2);

        } else if (endRegExp.test(rest)) {      //结束标记
            let tag = rest.match(endRegExp)[1];   //存放结束标签
            // console.log("检测到结束标记:", tag);
            let pop_tag = stack1.pop();
            // 此时，tag一定是和栈1顶部的是相同的
            if (tag == pop_tag) {
                // 将stack2中的文字弹栈
                let pop_arr = stack2.pop();
                if (stack2.length > 0) {
                    // 将弹出文字饭入stack栈顶的children属性中
                    stack2[stack2.length - 1].children.push(pop_arr);
                }
            } else {//标签未封闭,抛出错误
                throw new Error(pop_tag + "标签没有封闭");
            }
            // 指针移动标签的长度加2( ></ 也占两位)再加attrString的长度
            index += tag.length + 3;
            // console.log(stack1, JSON.stringify(stack2));
        } else if (wordRegExp.test(rest)) {     //识别结束标记前的文字
            let word = rest.match(wordRegExp)[1];
            // 若文字不全是空
            if (!/^\s+$/.test(word)) {
                // console.log("检测到文字:", word);
                // 将文字压入stack2
                stack2[stack2.length - 1].children.push({ "test": word, "type": 3 });
            }
            // console.log(stack1, stack2);
            index += word.length;
        } else { //标签中的文字
            index++;
        }
    }
    // console.log(stack2);
    // console.log(stack2[0].children);
    // console.log(stack2[0].children[0]);
    return stack2[0].children[0];
}
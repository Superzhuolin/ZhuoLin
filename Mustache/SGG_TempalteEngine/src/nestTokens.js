/* 
    函数的功能是折叠tokens，将#和/之间的tokens能够整合起来，作为它的下标为3的项
*/
export default function nestTokens(tokens) {
    var nestedTokens = [];// 存放结果数组
    // 栈结构，存放栈顶操作的小tokens;
    // 栈顶（靠近端口的，最新进入的）的tokens数组中当前操作的这个tokens小数组
    var sections = [];
    console.log(tokens);
    // 遍历每个tokens
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        // 对token的首项进行判断
        switch (token[0]) {
            case "#":
                // console.log(token);
                // 给这个token下标为2的项(即属性名)创建一个数组,以收集子元素
                token[2] = [];
                // 入栈
                sections.push(token);
                nestedTokens.push(token);
                break;
            case "/":
                // 出栈,pop()会返回刚弹出的项
                let section_pop = sections.pop();
                nestedTokens.push(section_pop);
                break;
            default:
                // 判断,栈队列当前情况+
                if (sections.length == 0) {
                    nestedTokens.push(token);
                } else {
                    sections[sections.length - 1][2].push(token);
                }
        }
    }
    return nestedTokens;
}
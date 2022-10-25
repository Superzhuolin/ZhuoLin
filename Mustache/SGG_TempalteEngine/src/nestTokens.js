/* 
    函数的功能是折叠tokens，将#和/之间的tokens能够整合起来，作为它的下标为3的项
*/
export default function nestTokens(tokens) {
    var resultTokens = [];// 存放结果数组
    // 栈结构，存放栈顶操作的小tokens;
    // 栈顶（靠近端口的，最新进入的）的tokens数组中当前操作的这个tokens小数组
    var sections = []; //栈顶小tokens

    // 收集器，天生指向resultTokens结果数组，引用类型值，所以指向的是同一个数组
    // 收集器的指向会变化，当遇见#的时候，收集器会指向这个token的下标为2的新数组
    var collector = resultTokens;
    // console.log(tokens);
    // 遍历每个tokens
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        // 对token的首项进行判断
        switch (token[0]) {
            case "#":
                // 收集器中放入这个token
                collector.push(token);
                // 入栈
                sections.push(token);
                // 收集器换人
                collector = token[2] = [];
                break;
            case "/":
                // 出栈.pop()会返回刚刚弹出的项
               sections.pop();
                // 改变收集器为结构队尾(队尾才是栈顶,即数组下标为2处)
                collector = sections.length > 0 ?
                                 sections[sections.length - 1][2] : resultTokens;
                break;
            default:
                // 甭管当前的collector是谁，可能是结果nestedTokens，也可能是某个token的下标为2的数组，
                // 甭管是谁，推入collctor中即可。
                collector.push(token);
        }
    }
    // console.log(collector == resultTokens); //有时相等,有时不相等
    return resultTokens;
}
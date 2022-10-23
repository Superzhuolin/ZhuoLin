import parseTemplateToTokens from "./parseTemplateToTokens"

// 全局提供SGG_TempalteEngine对象
window.SGG_TempalteEngine = {
    render(templateStr,data){
        // 调用parseTemplateToTokens函数,让模板字符串变成token数组
        var tokens = parseTemplateToTokens(templateStr);
        console.log(tokens);
    }
// 
}
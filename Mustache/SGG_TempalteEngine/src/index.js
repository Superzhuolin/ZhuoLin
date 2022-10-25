import parseTemplateToTokens from "./parseTemplateToTokens"
import renderTemplate from "./renderTemplate"

import lookup from "./lookup"

// 全局提供SGG_TempalteEngine对象
window.SGG_TempalteEngine = {
    render(templateStr, data) {
        // 调用parseTemplateToTokens函数,让模板字符串变成token数组
        var tokens = parseTemplateToTokens(templateStr);
        // 调用renderTemplate函数，让tokens数组变为dom字符串
        var domStr = renderTemplate(tokens, data);
        return domStr;
    }
}
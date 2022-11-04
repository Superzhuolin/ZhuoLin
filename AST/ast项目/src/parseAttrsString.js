// 将attrsString变为数组返回
export default function (attrsString){
    console.log(attrsString);
    if (attrsString == undefined)return [];
    var isYinhao = false; //是否在引号内
    var point = 0; //断点
    var result = []; //结果数组,存放属性
    // 遍历attrsString(不能直接用split)
    for (let i = 0; i < attrsString.length; i++) {
        let char = attrsString[i];
        if (char == '"') {//若char为引号  isYinghao取反
            isYinhao = !isYinhao;
        } else if (char == ' ' && !isYinhao){
            // 遇见空格并且不再引号内,将其推入结果数组
            // console.log(i, attrsString[i-1]);
            if (!/^\s*$/.test(attrsString.substring(point, i))){
                result.push(attrsString.substring(point,i).trim())
                point = i;
            }
        }
    }
    // 循环结束后剩下的那个属性也要进去
    result.push(attrsString.substring(point).trim())
    //功能:将["k=v","k=v","k=v"]变为[{name:k, value:v}, {name:k, value:v}, {name:k,value:v}];
    result = result.map(item=>{
        // 根据等号拆分
        const o = item.match(/^(.+)="(.+)"$/);
        return {
            name:o[1],
            value:o[2]
        }
    })

    console.log("result",result);
    return result;
}
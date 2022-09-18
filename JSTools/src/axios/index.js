// 使用解构赋值的方式来对参数进行接受收 来直接在函数中使用变量操作变量中的属性
export function axios({method,url,params,data}){
    // 方法转化大写
    method = method.toUpperCase();

    // 返回值
    return new Promise((resolve,reject)=>{
        // AJAX四步骤
        //1.创建对象
        const xhr = new XMLHttpRequest();
        // 2.初始化
        // 处理params对象  a=100&b=200
        let str = '';
        for(let k in params){
            str += `${k}=${params[k]}&`; // str += `a=100&`
        }
        str = str.slice(0,-1);//切取掉最后一位&
        xhr.open(method,url+"?"+str);
        // 3.发送
        if (method === "POST" || method === "PUT" || method ==="DELETE"){
            // Content-type mime 类型设置
            xhr.setRequestHeader("Content-type","application/json");
            // 设置请求体  get一般为空  post/put/delete一般有内容
            // JSON.stringify 方法将某个对象转换成 JSON 字符串形式。
            xhr.send(JSON.stringify(data));
        }else{
            xhr.send();
        }
        // 设置响应结果类型为JSON
        xhr.responseType = "json";
        // 4.处理结果
        xhr.onreadystatechange = ()=>{
            // 
            if(xhr.readyState  ===4 ){
                // 判断响应状态码 2xx
                if(xhr.status >= 200 && xhr.status <300){
                    // 成功
                    resolve({
                        status:xhr.status, //成功的状态码
                        message:xhr.statusText, //响应状态字符串
                        body:xhr.response //响应体
                    })
                }else{
                    // 失败
                    reject(new Error("请求失败,失败的状态码为"+xhr.status));
                }
            }
        }
    })
}

axios.get = function(url,options){
    // 发送AJAX请求GET
    /* Object.assign将所有可枚举属性的值从一个或多个源对象复制到目标对象，同时返回目标对象 */
    let config = Object.assign(options, { method: "GET", url});
    return axios(config);
}
axios.post = function(url,options){
    // 发送AJAX请求GET
    /* Object.assign将所有可枚举属性的值从一个或多个源对象复制到目标对象，同时返回目标对象 */
    let config = Object.assign(options, { method: "POST", url});
    return axios(config);
}
axios.put = function(url,options){
    // 发送AJAX请求GET
    /* Object.assign将所有可枚举属性的值从一个或多个源对象复制到目标对象，同时返回目标对象 */
    let config = Object.assign(options, { method: "PUT", url});
    return axios(config);
}
axios.delete = function(url,options){
    // 发送AJAX请求GET
    /* Object.assign将所有可枚举属性的值从一个或多个源对象复制到目标对象，同时返回目标对象 */
    let config = Object.assign(options, { method: "DELETE", url});
    return axios(config);
}
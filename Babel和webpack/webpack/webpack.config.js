//webpack一定要放在项目根目录下

//导入path模块
const path = require("path");
//定义js打包的规则
module.exports = {
    entry: './src/main.js',
    //编译成功输出的目录
    output: {
        //定义输出的指定目录_dirname当前项目的根目录,生成一个dist文件
        //_dirname指的是当前模块的根目录,相当于path.dirname()
        path: path.resolve(__dirname, "./dist"),
        //合并js文件存储在dist/bundle.js文件中
        filename: "bundle.js"
    },
    module: {
        rules: [{  //定义规则
            test: /\.css$/,   //把所有.css文件进行打包 
            use: ["style-loader", "css-loader"]
        }]
    }
}
//引入nodeJS内置模块path
const path = require('path')
// 暴露一个对象交给webpack使用  提取参数打包代码生成结果
module.exports = {
    // 模式  也可以使用 production(对代码进行压缩)
    mode: 'development',  //development会有注释和代码缩进
    // 入口:webpack打包的入口文件
    entry: './src/index.js',
    // 出口
    output: {
        // 打包文件夹:webpack代码打包完毕后输出的文件位置 
        path: path.resolve(__dirname, 'dist'),
        // 打包文件
        filename: 'atguigu-utils.js',
        // 向外暴露的对象的名称
        library: 'aUtils',
        // 打包生成库(模块) 可以通过esm/commonjs/reqirejs的语法引入
        libraryTarget: 'umd',
    },
}
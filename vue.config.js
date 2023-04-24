// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

// Paths webpack-dev-serverk
module.exports = defineConfig({
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        // 请求API时，把请求转接到8080端口
        target: 'http://localhost:8082',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock' //路径替换
        }
      }
    }
    
  }
})


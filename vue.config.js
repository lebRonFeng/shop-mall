module.exports = {
    // 关闭eslint
    lintOnSave: false,
    // 配置代理跨域
    devServer:{
        proxy:{
            "/api":{
                target: "http://gmall-h5-api.atguigu.cn"
                // target: 'http://39.98.123.211',
                // pathRewrite:{'^/api':''}
            }
        }
    }
}
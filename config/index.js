'use strict';
// 全局配置文件
module.exports = {
    admin: {
        dev: {
            env: 'development', //模式：开发or生产
            publicPath: '/', //html引用资源路径: 代表打包后，index.html里面引用资源的的相对地址
            host: 'localhost',
            port: '8090',
            assetsSubDirectory: 'static', //除了 index.html 之外的静态资源要存放的路径
            // assetRoot: //打包后文件要存放的路径
            devtoolType: 'cheap-module-eval-source-map',
        }
    }
}
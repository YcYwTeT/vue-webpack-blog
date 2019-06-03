'use strict';

const path = require('path');
const webpack = require('webpack');
const styleLoader = require('./utils');
const isAdmin = process.env.NODE_ENV_TYPE === 'admin';
const devConf = isAdmin ? require('../config').admin.dev : require('../config').client.dev;
const baseConf = require('./webpack.base.conf');

//合并模块
const merge = require('webpack-merge');
//html入口并自动加载main
const HtmlWebpackPlugin = require('html-webpack-plugin');
//编译提示
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
//系统通知
const notifier = require('node-notifier');

const dev = merge(baseConf,{
    output: {
        filename: '[name]-[hash].js',
        publicPath: devConf.publicPath
    },
    module: {
        rules: styleLoader.styleLoader({
            sourMap: true,
            extract: false,
        })
    },
    //生成sourceMaps
    devtool: devConf.devtoolType,
    //配置微型服务
    devServer: {
        hot: true,//热加载
        inline: true, //自动刷新
        open: true, //自动打开浏览器
        historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        host: devConf.host,
        port: devConf.port,
        proxy: devConf.proxyTable, //服务器代理
        compress: true, //压缩代码
        overlay: {
            errors: true,
            warnings: false
        },
        quiet: true, //服务器输出错误
    },
    plugins: [
        //开启HMR(热替代)
        new webpack.HotModuleReplacementPlugin(),
        //显示模块相对路径
        new webpack.NamedModulesPlugin(),
    ]
})
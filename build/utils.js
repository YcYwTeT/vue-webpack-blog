'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.cssLoader = function(options){
    const loaders = [{
        loader: 'css-loader',
        options: {
            minizise: process.env.NODE_ENV === 'procuciton', //是否压缩
            sourMap: options.sourceMap, //是否建立sourceMap联系
        }
    }]
    function generateLoaders(loader,loaderOptions){
        if(loader){
            loaders.push({
                loader: loader + '-loader',
                options: {...loaderOptions || {}, sourMap: options.sourceMap}
            })
        }
        if(options.extract){
            //是否抽离
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader',
                publicPath: '../../' //?
            })
        } else {
            return ['vue-style-loader'].concat(loaders);
        }
    }

    return {
        css: generateLoaders(),
        scss: generateLoaders('scss')
    }
}

exports.styleLoader = function(options){
    const output = [];
    const cssLoaders = exports.cssLoader(options);
    for(let extension in cssLoaders){
        let loader = cssLoaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'), //匹配文件类型
            use: loader
        })
    }
    return output;
}

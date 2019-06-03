'use strict';
const styleLoader = require('./utils')
const isProduction = process.env.NODE_ENV = 'production';

module.exports = {
    loader: styleLoader.cssLoader({
        sourMap: !isProduction, //是否需要建立联系
        extract: isProduction
    }),
    transformToRequire: {
        vedio: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
}

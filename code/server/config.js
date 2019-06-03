import path from 'path';
const auth = {
    //token配置
    admin_secret: 'admin-token', //token秘钥
    tokenKey: 'Token-Auth', //tokan属性名
    whiteList: ['login','client_api'], //白名单
    blackList: ['admin_api'], //黑名单
}

const log = {
    //日志配置
    logLevel: 'debug', //日志级别，debug最低级
    dir: path.resolve(__dirname,'../../logs'), //指定日志存放路径
    projectName: 'blog',
    ip: '0.0.0.0' //默认情况服务器ip地址
}

const port = process.env.NODE_ENV == 'production' ? '80' : '3000';

export default {
    env: process.env.NODE_ENV,
    auth,
    log,
    port,
    mongodb: {
        username: 'cd',
        password: '123456',
        address: 'localhost: 27017',
        db: 'test'
    }
}
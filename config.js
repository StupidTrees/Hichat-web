/**
 * 存放配置信息
 */

module.exports = {
    port: 3000,
    database:{
        name:'hichat',
        username:'cloudliter',
        password:'1234',
        host:'localhost',
        port:3306
    },
    files:{
        avatarDir:'files/img/avatar/',
        chatImageDir:'files/img/chat/',
        nsfwModelDir:'service/model/'
    }
}
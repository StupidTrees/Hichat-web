const con = require("./connector");
const DataTypes = con.DataTypes
exports.Op = con.Op
/**
 * 此文件用于定义所有需要用到的实体类型（即数据表对应的模型）
 */


/**
 * 用户表
 */
exports.User = con.sequelize.define(
    'user', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM('MALE', 'FEMALE'),
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        signature: {
            type: DataTypes.STRING,
            allowNull: true
        },
        avatar:{
            type:DataTypes.STRING,
            allowNull:true
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    },
    {
        tableName: 'user'
    }
);

//将定义好的模型同步到数据表，不强制覆盖
this.User.sync({force: false}).then(r => r)


/**
 * 用户好友关系表
 */
exports.UserRelation = con.sequelize.define(
    'relation', {
        key:{
            type:DataTypes.STRING,
            primaryKey: true
        },
        userId: {
            type: DataTypes.BIGINT,
            // references:'user', //关联表名
            // referencesKey:'id' //关联表的列名
        },
        friend: {
            type: DataTypes.BIGINT,
            // references:'user', //关联表名
            // referencesKey:'id' //关联表的列名
        },
        group: {
            type: DataTypes.BIGINT
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    },
    {
        tableName: 'relation'
    }
);

this.User.hasMany(this.UserRelation,{
    foreignKey:'id',
    targetKey:'userId'
})


//将关系表的friend字段声明为外键，映射到用户表的id
this.UserRelation.belongsTo(this.User, {
    foreignKey: 'friend',
    targetKey: 'id',
    as:'user'
})

//将定义好的模型同步到数据表，不强制覆盖
this.UserRelation.sync({force: false}).then(r => r)



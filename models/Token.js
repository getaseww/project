const {Sequelize,DataTypes}=require('sequelize')
const sequelize=require('../config/db')

const Token=sequelize.define('token',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,

    },
    token:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},
{
    timestamps:true,
})

module.exports=Token
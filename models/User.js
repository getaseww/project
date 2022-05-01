const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/db');
const About = require('./About');
const Profile = require('./Profile');
const Report = require('./Report');

const User=sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    role:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'student',
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},
{
    timestamps:true,
}
)
User.hasMany(Report, {
    foreignKey: 'studentId'
})
User.hasMany(Report, {
    foreignKey: 'tutorId'
})
User.hasOne(About)
User.hasOne(Profile)
module.exports = User
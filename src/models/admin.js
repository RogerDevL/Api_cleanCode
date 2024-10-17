const {DataTypes}  = require('sequelize');
const sequelize = require('../config/database');

const Admin = sequelize.define('Admin', {

    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },

    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true // E-mail unico
    },

    senha:{
        type:DataTypes.STRING,
        allowNull:false
    }, 

},
{
    timestamps: true // Timestamps, para armazenar a hora que foi criado
});
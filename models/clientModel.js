const Sequelize = require('sequelize')
const sequelize = require('../database')

const Clients = sequelize.define('clients',{
    name:{
        type:Sequelize.STRING(50),
        allowNull:false
    },
    email:{
        type:Sequelize.STRING(50),
        allowNull:false
    },
    message:{
        type:Sequelize.STRING(400),
        allowNull:true
    }
})

module.exports = Clients
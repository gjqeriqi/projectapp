const Sequelize = require('sequelize')

// Database Conection
const sequelize = new Sequelize('database','root','',{
    host:'localhost',
    dialect:'mysql'
})

sequelize
.authenticate()
.then(()=>{
    console.log('Database is Connected')
})
.catch((error) =>{
    console.log(error)
})

module.exports = sequelize
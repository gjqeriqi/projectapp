const express = require('express')
const sequelize = require('./database')
const app = express()
const Sequelize = require('sequelize')

app.set('view engine','ejs')

app.use('/static', express.static('static'))
const home = require('./routers/home')
app.use(home)

sequelize.sync()
//sequelize.sync({force:true})

app.listen(3000)
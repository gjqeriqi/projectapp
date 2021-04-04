const express = require('express')
const router = express.Router()
const Clients = require('../models/clientModel')
const Sequelize = require('sequelize')
const sequelize = require('../database')


router.get('/', (req, res) =>{
    res.render('home')
})

router.post('/client',(req,res) =>{
    Clients.create({
        name: 'req.body.name',
        email: 'req.body.email',
        message: 'req.body.message'

    })
    .then(()=>{
        res.send('Faliminderit!')
    })
    .catch(error =>{
        console.log(error)
    })
})

module.exports = router
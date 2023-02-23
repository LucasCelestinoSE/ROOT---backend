const express = require('express')
const router = express.Router()
const Users = require('../painel-controller/Users')

router.get('/testeJson', (req,res)=> {
    Users.findAll().then(users => {
        res.json({users})
    })
})
module.exports = router
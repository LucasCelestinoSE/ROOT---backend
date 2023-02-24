const express = require('express');
const router = express.Router()

// *Rotas
router.get('/', (req,res)=>{
    res.render('index.ejs')
})
router.get('/about', (req,res) => {
    res.render('navbar/about')
})
router.get('/course', (req,res) =>{
    res.render('navbar/course.ejs')
})
router.get('/forum', (req,res) =>{
    res.render('navbar/forum.ejs')
})
router.get('/contato', (req,res) =>{
    res.render('navbar/contact.ejs')
})

module.exports = router
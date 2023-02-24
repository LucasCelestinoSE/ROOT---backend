const express = require('express')
const router = express.Router()
const Users = require('../painel-controller/Users')
const Profs = require('../painel-controller/Profs')
router.get('/admin/insert/profs', (req,res)=> {
    res.render('admin/profs/insertProf.ejs')
})
router.post('/input/profs', (req,res)=> {
    
    Profs.create({
        nome: req.body.nome,
        linkFoto: req.body.link,
        area: req.body.area,
        areaIcon: req.body.areaIcon,
        SubAreaIcon: req.body.SubAreaIcon,
        subArea: req.body.subArea
    }).then(() => { res.redirect('/admin/insert/profs')})
})
router.get('/admin/tables/profs', (req,res) => {
    Profs.findAll().then(profs =>{
        res.render('admin/profs/profsTables', {profs: profs})
    })
})
router.get('/admin/json/profs', (req,res) => {
    Profs.findAll().then(profs =>{
        res.send(profs.slice(0,2))
    })
})
router.post('/admin/delete/profs', (req,res) => {
    var id = req.body.id
    if (id != undefined){
        Profs.destroy({
            where: {
                id: id
            }
        }).then(() => res.redirect('/admin/tables/profs'))
    }
})
router.get('/profs/:id?', (req,res) =>{
    var id = Number(req.params.id)
    if(!id){
        Profs.findAll({
            limit: 8,
            offset:0
        }).then(profs=>{
            res.render('profs',{profs:profs})
        })
    }else{
        Profs.findAll({
            limit: 8,
            offset:8*(id-1)
        }).then(profs=>{
            res.render('profs',{profs:profs})
        })
    }
   })
module.exports = router
// Abrir uma rota //
    const express = require('express')
    const app = express()
    var bodyparser = require('body-parser')
    const navbar_controller = require('./navbar-controller/navbar-controller')
    const connection = require('./database/Database');
    const painel_controller = require('./painel-controller/painelController')
// DB
    // O catch serve para pegar o erro da aplicação.
    connection.authenticate().then(() => {
        console.log('Conexão feita com banco de dados')
    }).catch((error) => console.log(error))
// *configs

    // view ejs*

    app.set('view engine', 'ejs')

    // pasta static

    app.use(express.static("public"))

    // body parser

    //app.use(bodyParser.urlencoded({ extended: true }))
    //app.use(bodyParser.json())

// * Rotas
    app.use('/', navbar_controller)
    app.use('/', painel_controller)
// *server
    app.listen('8080', (error)=>{
        if (error) {
            console.log(error)
        }else{
            console.log('Servidor foi iniciado com sucesso')
        }
    })
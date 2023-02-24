const Sequelize = require('sequelize')
const connection = require('../database/Database')
const Profs = connection.define('profs',{
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    linkFoto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    area: {
        type: Sequelize.STRING,
        allowNull: false
    },
    areaIcon:{
        type: Sequelize.STRING,
        allowNull: false
    },
    subArea: {
        type: Sequelize.STRING,
        allowNull: false
    },
    SubAreaIcon:{
        type: Sequelize.STRING,
        allowNull: false
    }
})
Profs.sync();
module.exports = Profs
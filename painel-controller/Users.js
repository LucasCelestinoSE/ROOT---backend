const Sequelize = require('sequelize')
const connection = require('../database/Database')
const Users = connection.define('usersSystem',{
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    } 
})
Users.sync()
module.exports = Users
const Sequelize = require('sequelize');
const connection = new Sequelize('bancoRoot','root','lucas@98623457',{
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = connection;
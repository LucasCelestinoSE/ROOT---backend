const Sequelize = require('sequelize');
const connection = new Sequelize('bancoroot','root','lucas@98623457',{
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = connection;
// git add *
// git push
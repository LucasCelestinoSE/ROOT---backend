const Sequelize = require('sequelize');
const connection = new Sequelize('railway','root','8ZpEgitN4pAx0Avwbui4',{
    host: 'containers-us-west-83.railway.app',
    dialect: 'mysql'
});
module.exports = connection;
// git add *
// git push
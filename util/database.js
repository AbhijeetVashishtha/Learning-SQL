const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '12345abhi', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
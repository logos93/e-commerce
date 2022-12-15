const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'project_pass@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

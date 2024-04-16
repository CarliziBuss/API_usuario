const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('bd_nodejs','user','senha',
  {
    dialect: 'MySQL80',
    host: 'localhost',
    port:3306,
    storage: 'database.sqlite', 
  });
  sequelize.sync(); //criar nova tabela se nÃo exitir nenhuma. 

  module.exports = sequelize;

//Configurações basicas p/ conectar c/ base de dados
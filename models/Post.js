const { DataTypes} = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Post.belongsTo(User); 

module.exports = Post;
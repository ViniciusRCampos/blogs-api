'use strict';

const BlogPost = require("./BlogPost");

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
  },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    // modelName: 'user',
    underscored: true,
  })

  user.associate = (models) => {
    user.hasMany(models.BlogPost,{
      foreignKey: 'blog_post_id',
      as: 'blog_post'
    })
  }
  return user;
};
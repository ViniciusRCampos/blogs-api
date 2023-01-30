'use strict';

module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    sequelize,
    // modelName: 'BlogPost',
    timestamps: false,
    underscored: true,
  })

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'users',
    })  
  }
  return blogPost;
}

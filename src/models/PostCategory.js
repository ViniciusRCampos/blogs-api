'use strict';
module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory',{
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  }, {
    sequelize,
    // modelName: 'PostCategory',
    underscored: true,
  })
  
  postCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
        as: 'blog_posts',
        through: postCategory,
        foreignKey: 'categoryId',
        otherKey: 'blogPostId',
    });

    models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: postCategory,
        foreignKey: 'blogPostId',
        otherKey: 'categoryId',
    });
  }
  
  return postCategory;
};
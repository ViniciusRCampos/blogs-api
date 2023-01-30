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
    timestamps: false,
    tableName: 'posts_categories',
    
  })
  
  postCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
        as: 'blog_posts',
        through: postCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
    });

    models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: postCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
    });
  }
  
  return postCategory;
};

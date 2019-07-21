module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    'Article',
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {}
  );
  Article.associate = function({ User, Comment }) {
    // associations can be defined here
    Article.belongsTo(User, { foreignKey: 'authorId', as: 'author' });
    Article.hasMany(Comment, { foreignKey: 'articleId', as: 'article' });
  };
  return Article;
};

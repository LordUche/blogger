module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      content: DataTypes.TEXT,
    },
    {}
  );
  Comment.associate = function({ Article, User }) {
    // associations can be defined here
    Comment.belongsTo(Article, { foreignKey: 'articleId', as: 'article' });
    Comment.belongsTo(User, { foreignKey: 'authorId', as: 'author' });
  };
  return Comment;
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  User.associate = function({ Article, Comment }) {
    // associations can be defined here
    User.hasMany(Article, { foreignKey: 'authorId', as: 'posts' });
    User.hasMany(Comment, { foreignKey: 'authorId', as: 'author' });
  };
  return User;
};

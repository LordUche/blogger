require('dotenv/config');
module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
  },
  test: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
  },
};

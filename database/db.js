import Sequelize from 'sequelize';

const config = {
    development: {
      username: 'apple-raccoon',
      password: 'ne_moloko',
      database: 'ne_moloko',
      host: 'localhost',
      port: 5432,
      dialect: 'postgres',
    },
};

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

export const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Подключение к базе данных установлено.');
  })
  .catch((err) => {
    console.error('Ошибка подключения к базе данных:', err);
  });

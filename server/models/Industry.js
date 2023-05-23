import { DataTypes } from 'sequelize';

import { sequelize } from '../../database/db.js';

export const Industry = sequelize.define('Industry', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  await sequelize.sync();
  console.log('Модель "Industry" была синхронизирована с базой данных.');
})();

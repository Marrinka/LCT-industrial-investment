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

// Review on project "Mold"

// The experiment: the experiment is to observe the process of mold appearing on three types of bread

// The  hypotheses: the team suggested the time order when a particular type would be have covered with mold

// The results: the one hypothesis was approved. The white bread molded first on fifth day. But Ukrainsky and Borodinsky types of bread got dried and didnt' molded 

// Rubrics:

// accurate pronunciation - there were some mistakes in the speech of the second speaker but the quality of sound didn't let to detect them 
// effective visuals - the visuals were good but there were little dynamic in this video
// sound quality - there is a sharp transition between two video fragments 
// accurate language - the used terms were accurate 
// coherent structure - well-structured, the team kept the right order 

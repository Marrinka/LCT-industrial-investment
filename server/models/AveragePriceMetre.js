import { DataTypes } from "sequelize";

import { sequelize } from "../../database/db.js";

export const AveragePriceMetre = sequelize.define("AveragePriceMetre", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
        autoIncrement: true
	},
	county_of_msk: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	avg_price_metre: {
		type: DataTypes.INTEGER,
		allowNull: false,
	}
});

(async () => {
	await sequelize.sync();
	console.log('Модель "AveragePriceMetre" была синхронизирована с базой данных.');
})();

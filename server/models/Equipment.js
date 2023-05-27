import { DataTypes } from "sequelize";

import { sequelize } from "../../database/db.js";

export const Equipment = sequelize.define("Equipment", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	type_of_equipment: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	avg_price_dollar: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	avg_price_rub: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});

(async () => {
	await sequelize.sync();
	console.log(
		'Модель "Equipment" была синхронизирована с базой данных.'
	);
})();

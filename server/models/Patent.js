import { DataTypes } from "sequelize";

import { sequelize } from "../../database/db.js";

export const Patent = sequelize.define("Patent", {
	type_of_activity: {
		type: DataTypes.STRING,
		primaryKey: true
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});

(async () => {
	await sequelize.sync();
	console.log(
		'Модель "Patent" была синхронизирована с базой данных.'
	);
})();

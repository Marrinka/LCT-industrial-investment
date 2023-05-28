import { DataTypes } from "sequelize";

import { sequelize } from "../../database/db.js";

export const Accounting = sequelize.define("Accounting", {
	form: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	OCN_max: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
    OCN_min: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	UCN_max: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
    UCN_min: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	patent_max: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
    patent_min: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});

(async () => {
	await sequelize.sync();
	console.log(
		'Модель "Accounting" была синхронизирована с базой данных.'
	);
})();

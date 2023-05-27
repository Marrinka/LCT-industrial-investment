import { DataTypes } from "sequelize";

import { sequelize } from "../../database/db.js";

export const Industry = sequelize.define("Industry", {
	industries: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	avg_employers_2021: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	avg_sal_2021: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	taxes_2022: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	income_taxes_2022: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	property_taxes_2022: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	land_taxes_2022: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	pers_income_taxes_2022: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	transport_tax_2022: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	other_taxes_2022: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});

(async () => {
	await sequelize.sync();
	console.log('Модель "Industry" была синхронизирована с базой данных.');
})();

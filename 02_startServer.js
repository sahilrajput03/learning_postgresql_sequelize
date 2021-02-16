const {Sequelize, DataTypes} = require("sequelize");
const {testConnection} = require("./testConnection.js");

const sequelize = new Sequelize(
	"postgres://chetan:66p@localhost:5432/mydb_test"
	// "postgres://postgres:postgresp@localhost:5432/mydb_test"
);

const User = sequelize.define(
	"users",
	{
		name: DataTypes.TEXT,
		lastName: DataTypes.TEXT,
		favoriteColor: {
			type: DataTypes.TEXT,
			defaultValue: "green",
		},
		age: DataTypes.INTEGER,
		cash: DataTypes.INTEGER,
		hasHair: DataTypes.BOOLEAN,
	},
	{
		tableName: "users", //explicity providing table name!
		createdAt: false,
		updatedAt: false,
		// freezeTableName: true,// This enforces the model to be exactly equal to table name!
	}
);

const print = (entity) => {
	console.log(entity.toJSON()); // This is good!/
	// console.log(JSON.stringify(entity, null, 4)); // This is also good!
};

module.exports = {sequelize, User, print};

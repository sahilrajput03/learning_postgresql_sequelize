const {Sequelize, DataTypes} = require("sequelize");
const {testConnection} = require("./testConnection.js");

const main = async () => {
	const sequelize = new Sequelize(
		"postgres://postgres:postgresp@localhost:5432/postgres"
	);

	// await testConnection(sequelize);

	const User = sequelize.define(
		"User",
		{
			name: {
				type: DataTypes.STRING,
				defaultValue: "John Doe",
			},
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING,
			},
		},
		{
			freezeTableName: true,
			// Stops the auto-pluralization, above will create a model named User pointing to a table also named User
		}
	);

	await User.sync({force: true});
	console.log("::MyInfo::The table for the User model was just (re)created!");

	await User.drop();
	console.log("::MyInfo::User table dropped!");

	await sequelize.drop();
	console.log("::MyInfo::All tables dropped!");
	// `sequelize.define` also returns the model
	// console.log(User === sequelize.models.User); // true
};

main();

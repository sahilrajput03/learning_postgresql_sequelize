const {sequelize, User, print} = require("./02_startServer.js");

const main = async () => {
	User.sync({alter: true}); // This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

	let users;
	// console.log(users.every((user) => user instanceof User)); // true

	users = await User.findAll();

	console.log("All users:", JSON.stringify(users, null, 2));
};

main();

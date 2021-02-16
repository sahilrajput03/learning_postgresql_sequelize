const {sequelize, User, print} = require("./02_startServer.js");

const main = async () => {
	let users;
	// console.log(users.every((user) => user instanceof User)); // true

	users = await User.findAll({
		attributes: ["age", "id"],
	});

	console.log("All users:", JSON.stringify(users, null, 2));
};

main();

const {Op} = require("sequelize");
const {sequelize, User, print} = require("./02_startServer.js");

let log = console.log;

const main = async () => {
	User.sync({alter: true}); // This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

	let users;
	// console.log(users.every((user) => user instanceof User)); // true

	try {
		// Change everyone without a last name to "Doe"
		users = await User.update(
			{cash: 6_999},
			// NOTE: This type of update is type of update like newData = {...oldData, cash: "6_999"} i.e., other older properties will be preserved, yikes!
			{
				where: {
					id: "1",
					name: "Sundar Pichai",
				},
			}
		);

		console.log("All users:", JSON.stringify(users, null, 2));
		// HERE, we'll get no. of items records   ↑ deleted in users binding.
	} catch (e) {
		log("GOT ERROR:", e);
	}
};

main();

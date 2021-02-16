const {Op} = require("sequelize");
const {sequelize, User, print} = require("./02_startServer.js");
// Deletes entire table in db.
let log = console.log;

const main = async () => {
	let users;
	// console.log(users.every((user) => user instanceof User)); // true

	try {
		users = await User.destroy({truncate: true});
		console.log("All users:", JSON.stringify(users, null, 2));
		// HERE, we'll get 0 as the value of users ↑.
	} catch (e) {
		log("GOT ERROR:", e);
	}
};

main();

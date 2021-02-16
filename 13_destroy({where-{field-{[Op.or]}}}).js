const {Op} = require("sequelize");
const {sequelize, User, print} = require("./02_startServer.js");

let log = console.log;

const main = async () => {
	let users;
	// console.log(users.every((user) => user instanceof User)); // true

	try {
		users = await User.destroy({
			where: {
				id: {
					[Op.or]: [1, 4],
				},
				// Other fields can be specified here too.
			},
			// This will destroy multiple records if matched!
		});
		console.log("All users:", JSON.stringify(users, null, 2));
		// HERE, we'll get no. of items records   ↑ deleted in users binding.
	} catch (e) {
		log("GOT ERROR:", e);
	}
};

main();

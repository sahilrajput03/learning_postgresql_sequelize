const {sequelize, User, print} = require("./02_startServer.js");

const main = async () => {
	let users;
	// console.log(users.every((user) => user instanceof User)); // true

	users = await User.findAll({
		attributes: [
			[sequelize.fn("COUNT", sequelize.col("hasHair")), "n_hasHair"],
			// [sequelize.fn("COUNT", sequelize.col("cash")), "n_cash"],
			// Putting more attributes here break the output,says something like you
			// must use some aggregation/group by thing to use it.
		],
	});

	console.log("All users:", JSON.stringify(users, null, 2));
};

main();

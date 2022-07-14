const {sequelize, User, print} = require("./02_startServer.js");

const main = async () => {
	await sequelize.sync();
	//↑↑↑↑ This won't alter any previous table, yikes!

	// await sequelize.sync({force: true});
	// force will recreate the table it ↑↑↑↑ (deleting earlier one).

	let john_user;

	john_user = await User.create(
		{name: "John Doe", age: 25, cash: 3000},
		{
			fields: ["name"],
			// Now only name field will be saved, and age and cash wil be discarded.
			// But fields which have default values (specified in the sequel model) will deafult values as it is, like we have `favouriteColor`.
		}
	);

	console.log("Jane was saved to the database!");
	print(john_user);
};

main();

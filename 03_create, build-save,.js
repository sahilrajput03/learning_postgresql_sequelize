const {sequelize, User, print} = require("./02_startServer.js");

const main = async () => {
	await sequelize.sync(); // This won't alter any previous table, yikes!
	// await sequelize.sync({force: true}); // force will recreate it(deleting earlier one).
	// User.sync({alter: true}); // This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

	const useCreate = true; //`true` is cool I guess.

	let jane_user;

	if (useCreate) {
		jane_user = await User.create(
			{name: "Sonali Bendre", age: 12, cash: 500, hasHair: true}
			// If you don't specify any field value(which is there in schema) will be assigned NULL as value.
			// If you specify any field that is not in model, then it'll be removed simply!
		);
		// await jane_user.increment({age: 2, cash: 100}); // METHOD:: .increment  increments the value of age and cash by 1, yikes!
	} else {
		jane_user = User.build({name: "Jane"});
		// jane_user.age = 12;//Also legit way to change properties.
		await jane_user.save();
	}

	console.log("Jane was saved to the database!");
	print(jane_user);
};

main();

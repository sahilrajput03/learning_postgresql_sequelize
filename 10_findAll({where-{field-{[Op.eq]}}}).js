const {Op, DataTypes} = require("sequelize");
const {sequelize, User, print} = require("./02_startServer.js");

let log = console.log;

const main = async () => {
	let users;
	// console.log(users.every((user) => user instanceof User)); // true

	try {
		users = await User.findAll({
			where: {
				// age: {
				age: {
					[Op.eq]: 12,
					// This is equivalent to example 9 in which there is no operator, so sequelize assues equality operator to use.
				},
				// Other fields can be specified here too.
			},
			// This will fetch multiple records if matched!
			// Also, will fetch empty array if nothing is matched.
		});
		console.log("All users:", JSON.stringify(users, null, 2));
	} catch (e) {
		log("GOT ERROR:", e);
	}
};

main();

// Read all operators @ https://sequelize.org/master/manual/model-querying-basics.html#operators

// Op.eq =

// Op.ne !=

// Op.is , Used to check for null, true, false values.
// Read more about is operator at postgres docs(not sequelize), https://www.postgresql.org/docs/9.1/functions-comparison.html

// OP.not , Used to check for null, true, false values. Its just opposite of Op.is thingg.

// Op.or , Feed values as an array i.e., [5,6]

// Op.gt , greater than

// Op.gte , greater than equal to

// Op.lt , less than

// Op.lte , less than equal to

// Op.between , Feed value as array i.e., [6,10]

// Op.notBetween , Feed value as array i.e., [11,15]

//

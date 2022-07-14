// @ts-nocheck
const {sequelize, User, print} = require('./02_startServer.js')

const main = async () => {
	// await sequelize.sync(); // This won't alter any previous table, yikes!
	await sequelize.sync({force: true}) // force will recreate it(deleting earlier one).
	// User.sync({alter: true}); // This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

	let john_user

	john_user = await User.create({
		name: 'Sundar Pichai',
		age: 48,
		cash: 1000,
		hasHair: true,
	})
	print(john_user)

	john_user = await User.create({
		name: 'Jeff Bezoz',
		age: 57,
		cash: 2000,
		hasHair: false,
	})
	print(john_user)

	john_user = await User.create({
		name: 'Ritesh Aggarwal',
		age: 27,
		cash: 3000,
		hasHair: true,
	})
	print(john_user)

	john_user = await User.create({
		name: 'Elon Musk',
		age: 49,
		cash: 4000,
		hasHair: true,
	})
	print(john_user)

	john_user = await User.create({
		name: 'Bill Gates',
		age: 65,
		cash: 5000,
		hasHair: true,
	})
	print(john_user)
}

main()

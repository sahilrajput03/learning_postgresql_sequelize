// @ts-nocheck
const {Op} = require('sequelize')
const {sequelize, User, print} = require('./02_startServer.js')

let log = console.log

// LEARN: Read important stuff on the end of this page, PLEASE!
// LEARN: (FROM DOCS)BY DEFAULT, bulkCreate DOES *NOT* RUN VALIDATIONS ON EACH OBJECT THAT IS GOING TO BE CREATED (WHICH CREATE DOES). TO MAKE BULKCREATE RUN THESE VALIDATIONS AS WELL, YOU MUST PASS THE VALIDATE: TRUE OPTION. THIS WILL DECREASE PERFORMANCE.

const main = async () => {
	// console.log(users.every((user) => user instanceof User)); // true
	await sequelize.sync({force: true}) // force will recreate it(i.e., deleting earlier db first).

	try {
		let users = await User.bulkCreate([
			{
				name: 'Sundar Pichai',
				age: 46,
				cash: 1001,
				hasHair: true,
			},
			{
				name: 'Jeff Bezoz',
				age: 57,
				cash: 2001,
				hasHair: false,
			},
			{
				name: 'Ritesh Aggarwal',
				age: 27,
				cash: 3001,
				hasHair: true,
			},
			{
				name: 'Elon Musk',
				age: 49,
				cash: 4001,
				hasHair: true,
			},
		])
		console.log(users.length) // 2
		console.log(users[0] instanceof User) // true
		console.log(users[0].name) // 'Jack Sparrow'
		console.log(users[0].id) // 1 // (or another auto-generated value)

		console.log('All users:', JSON.stringify(users, null, 2))
	} catch (e) {
		log('GOT ERROR:', e)
	}
}

main()

// LEARN: validate property is not working(tested on 10 Feb,21) :(
// result: validation occurs no matter if you set explicitly validate as true or false.

// LEARN: Sequelize provides the Model.bulkCreate method to allow creating multiple records at once, with only one query.
// LEARN: The usage of Model.bulkCreate is very similar to Model.create, by receiving an array of objects instead of a single object.

// LEARN: (FROM DOCS)BY DEFAULT, bulkCreate DOES *NOT* RUN VALIDATIONS ON EACH OBJECT THAT IS GOING TO BE CREATED (WHICH CREATE DOES). TO MAKE BULKCREATE RUN THESE VALIDATIONS AS WELL, YOU MUST PASS THE VALIDATE: TRUE OPTION. THIS WILL DECREASE PERFORMANCE.
// LEARN: (From me)You can run validations for bulkCreate as well by calling it along with second argument i.e.,  { validate: true }. Yikes!
// Read from docs: https://sequelize.org/master/manual/model-querying-basics.html#creating-in-bulk

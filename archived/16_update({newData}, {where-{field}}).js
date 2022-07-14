const {Op} = require('sequelize')
const {sequelize, User, print} = require('./02_startServer.js')
// EXAMPLE FROM DOCS OF SEQUELIZE
let log = console.log

const main = async () => {
	try {
		// Change everyone without a last name to "Doe"
		let users = await User.update(
			{lastName: 'Doe'},
			// NOTE: This type of update is type of update like newData = {...oldData, lastName: "Doe"} i.e., other older properties will be preserved, yikes!
			{
				where: {
					lastName: null,
				},
			}
		)

		console.log('All users:', JSON.stringify(users, null, 2))
		// HERE, we'll get no. of items records   ↑ deleted in users binding.
	} catch (e) {
		log('GOT ERROR:', e)
	}
}

main()

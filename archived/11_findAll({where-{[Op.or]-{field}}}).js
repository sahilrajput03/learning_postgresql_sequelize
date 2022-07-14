const {Op} = require('sequelize')
const {sequelize, User, print} = require('./02_startServer.js')

let log = console.log

const main = async () => {
	try {
		let users = await User.findAll({
			where: {
				[Op.or]: [{id: 1}, {id: 4}],
				// Other fields can be specified here too.
			},
			// This will fetch multiple records if matched!
			// Also, will fetch empty array if nothing is matched.
		})
		console.log('All users:', JSON.stringify(users, null, 2))
	} catch (e) {
		log('GOT ERROR:', e)
	}
}

main()

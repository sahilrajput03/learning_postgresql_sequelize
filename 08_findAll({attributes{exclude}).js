const {sequelize, User, print} = require('./02_startServer.js')

let log = console.log

const main = async () => {
	try {
		let users = await User.findAll({
			attributes: {
				exclude: ['id', 'age'],
				// This will fetch all properties except id and age fields.
			},
		})
		console.log('All users:', JSON.stringify(users, null, 2))
	} catch (e) {
		log('GOT ERROR:', e)
	}
}

main()

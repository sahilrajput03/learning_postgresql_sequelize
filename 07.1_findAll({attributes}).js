const {sequelize, User, print} = require('./02_startServer.js')

const main = async () => {
	let users = await User.findAll({
		attributes: ['age', 'cash'],
	})

	console.log('All users:', JSON.stringify(users, null, 2))
}

main()

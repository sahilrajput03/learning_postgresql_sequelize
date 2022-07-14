const {User} = require('./02_startServer.js')
// Deletes entire table in db.
let log = console.log

const main = async () => {
	try {
		let users = await User.destroy({truncate: true})
		console.log('All users:', JSON.stringify(users, null, 2))
		// HERE, we'll get 0 as the value of users ↑.
	} catch (e) {
		log('GOT ERROR:', e)
	}
}

main()

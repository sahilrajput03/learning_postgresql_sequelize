const { sequelize, User, print } = require("./02_startServer.js");

const main = async () => {
	await sequelize.sync({ force: true }); // force will recreate it(deleting earlier one).
};

main();

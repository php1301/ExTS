import { Sequelize } from "sequelize";
export const sequelize = new Sequelize({
	dialect: "mysql",
	database: "fs08_movie_ticket",
	username: "root",
	password: "pinodien",
	host: "localhost",
	port: 3306,
});
sequelize
	.authenticate()
	.then(() => console.log("connected to database"))
	.catch((err) => console.log(err));
sequelize
	.sync({ alter: true })
	.then(() => console.log("Sync succesfully"));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize({
    dialect: "mysql",
    database: "fs08_movie_ticket",
    username: "root",
    password: "pinodien",
    host: "localhost",
    port: 3306,
});
exports.sequelize
    .authenticate()
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));
exports.sequelize
    .sync({ alter: true })
    .then(() => console.log("Sync succesfully"));

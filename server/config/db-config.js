require("dotenv").config;
const env = process.env.NODE_ENV || "development";
const knex = require("knex");
const config = require("../knexfile");

module.exports = knex(config[env]);

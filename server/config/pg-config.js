const pg = require("pg");
const { Pool } = pg;
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  max: 20,
  database: "messages",
  password: "Benoni951!"
});

module.exports = pool;

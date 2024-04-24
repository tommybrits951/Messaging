const db = require("../config/db-config");

function getById(id) {
  const user = db("users").where({ id }).first();
  return user;
}

async function insertUser(user) {
  let [id] = await db("users").insert(user).returning("id");
  id = id.id;
  const result = await getById(id);
  console.log(result);
  return result;
}

async function getByUsername(username) {
  const user = await db("users").where("username", username).first();
  return user;
}

async function getByEmail(email) {
  const user = await db("users").where("email", email).first();
  return user;
}

module.exports = {
  insertUser,
  getById,
  getByUsername,
  getByEmail
};

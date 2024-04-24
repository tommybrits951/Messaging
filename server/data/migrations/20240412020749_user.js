/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments("user_id").primary();
    tbl.string("first_name", 50).notNullable();
    tbl.string("last_name", 50);
    tbl.string("email", 150).notNullable();
    tbl.bigInteger("postal").notNullable();
    tbl.string("username", 100).notNullable();
    tbl.string("password").notNullable();
    tbl.date("joined").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};

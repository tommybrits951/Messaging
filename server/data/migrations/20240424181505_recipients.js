/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("recipients", (tbl) => {
    tbl.increments("rec_id").primary();
    tbl
      .integer("message_id")
      .unsigned()
      .references("message_id")
      .inTable("messages");
    tbl.integer("user_id").unsigned().references("user_id").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("recipients");
};

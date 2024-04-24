/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("messages", (tbl) => {
    tbl.increments("message_id").primary();
    tbl.integer("sender_id").unsigned().references("user_id").inTable("users");
    tbl.dateTime("time_sent").notNullable();
    tbl.string("subject").defaultTo("none");
    tbl.string("message").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("messages");
};

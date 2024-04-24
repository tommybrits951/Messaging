/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("messages").del();
  await knex("messages").insert([
    {
      message_id: 1,
      sender_id: 1,
      time_sent: "04-20-2024 12:00:00",
      message: "hello"
    },
    {
      message_id: 2,
      sender_id: 2,
      time_sent: "04-20-2024 12:10:00",
      message: "hi"
    },
    {
      message_id: 3,
      sender_id: 3,
      time_sent: "04-20-2024 12:20:00",
      message: "message me"
    },
    {
      message_id: 4,
      sender_id: 2,
      time_sent: "04-20-2024 12:23:00",
      message: "whats up"
    },
    {
      message_id: 5,
      sender_id: 4,
      time_sent: "04-20-2024 12:26:00",
      message: "fuck this"
    }
  ]);
};

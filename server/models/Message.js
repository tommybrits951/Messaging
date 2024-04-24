const db = require("../config/db-config");
const pool = require("../config/pg-config");

function getMessageById(id) {
  const message = db("message").where("message_id", id).first();
  return message;
}

async function insertMessage(message) {
  const [id] = await db("messages").insert(message).returning({ id });
  const result = await getMessageById(id);
  return result;
}

const chatColumns = [
  "c.chat_id",
  "c.host_id",
  "m.sent",
  "m.message",
  "s.user_id",
  "s.username",
  "r.user_id",
  "r.username"
];

async function getMessagesByChat(id) {
  const messages = await db("chats as ch")
    .where("chat_id", id)
    .leftJoin("messages as m", "m.chat_id", "ch.chat_id")
    .leftJoin("users as u", "m.sender", "u.user_id")
    .columns(chatColumns);
  return messages;
}

async function getMessagesByReceived(rec) {
  const messages = await db("chats as c")
    .leftJoin("messages as m", "c.chat_id", "m.chat_id")
    .leftJoin("users as u", "u.user_id", "m.rec");
  return messages;
}

async function getMessages(id) {
  const messages = await db("chats as c").leftJoin(
    "messages as m",
    "c.chat_id",
    "m.chat_id"
  );
}

module.exports = {
  getMessageById,
  insertMessage,
  getMessagesByChat
};

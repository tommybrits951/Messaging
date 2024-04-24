const Message = require("../models/Message");

async function sendMessage(req, res, next) {
  try {
    const { sender, rec } = req.body;
    const obj = req.body;
    const messages = await Message.getMessagesByChat(sender, rec);
    console.log(messages);
    res.json(messages);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  sendMessage
};

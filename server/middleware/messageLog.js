const { logEvent } = require("./logger");
const User = require("../models/User");

async function messageLogger(req, res, next) {
  try {
    const { sender_id, recipients } = req.body;
    const sender = await User.getById(sender_id);
    for (let i = 0; i < recipients.length; i++) {
      const rec = await User.getById(recipients[i]);
      logEvent(
        `${sender.email}\t${sender.username}\t${rec.email}\t${rec.username}\t${rec.body.message}`,
        "messageLog.log"
      );
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = messageLogger;

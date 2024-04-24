const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const { format } = require("date-fns");

async function logEvent(message, logFileName) {
  const dateTime = format(new Date(), "MM-dd-yyyy\tHH:mm:ss");
  const logItem = `${dateTime}\t${message}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logFileName),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
}

async function logger(req, res, next) {
  logEvent(
    `${req.method}\t${req.url}\t${req.headers.origin}\t${req.hostname}\t${req.body.email}`,
    "reqLog.log"
  );
  next();
}

module.exports = {
  logEvent,
  logger
};

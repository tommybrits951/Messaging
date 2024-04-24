const router = require("express").Router();
const controller = require("../controllers/messageController");
const messageLogger = require("../middleware/messageLog");

router.post("/", controller.sendMessage);
module.exports = router;

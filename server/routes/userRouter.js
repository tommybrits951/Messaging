const { logger } = require("../middleware/logger");
const router = require("express").Router();
const controller = require("../controllers/userController");
router.route("/").post(controller.register);
router.post("/login", logger, controller.login);

module.exports = router;

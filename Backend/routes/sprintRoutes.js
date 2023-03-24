const express = require("express");
const { SprintTask, GetSprintTask } = require("../controller/sprintController");
const isAuth = require("../middleware/isAuth");
const router = express.Router();

router.post("/task", isAuth, SprintTask);
router.get("/", isAuth, GetSprintTask);

module.exports = router;

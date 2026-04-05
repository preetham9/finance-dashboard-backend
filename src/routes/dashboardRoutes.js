const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/dashboardController");
const auth = require("../middleware/auth");

router.get("/summary", auth, ctrl.summary);

module.exports = router;
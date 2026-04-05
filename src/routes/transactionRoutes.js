const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/transactionController");
const auth = require("../middleware/auth");

router.post("/", auth, ctrl.create);
router.get("/", auth, ctrl.getAll);
router.put("/:id", auth, ctrl.update);
router.delete("/:id", auth, ctrl.delete);

module.exports = router;
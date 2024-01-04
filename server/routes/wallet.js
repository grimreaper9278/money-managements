const express = require("express");
const { protect } = require("../middlewares/auth");
const router = express.Router();
const { userAmount } = require("../controllers/wallet");

router.get("/amount", protect, userAmount);

module.exports = router;

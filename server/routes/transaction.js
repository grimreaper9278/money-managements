const express = require("express");
const { protect } = require("../middlewares/auth");
const router = express.Router();
const { list, transaction } = require("../controllers/transaction");

router.get("/list", protect, list).post("/", protect, transaction);

module.exports = router;

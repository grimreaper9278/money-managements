const express = require("express");
const { protect } = require("../middlewares/auth");
const router = express.Router();
const { list } = require("../controllers/transaction");

router.get("/list", list);

module.exports = router;

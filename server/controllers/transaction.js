const asyncHandler = require("../middlewares/async");
const TransactionModel = require("../models/transaction");

// @desc        Get user transaction list
// @route       GET /api/transaction/list
// @access      Private
exports.list = asyncHandler(async (req, res, next) => {
  const { id } = req.query;
  const result = await TransactionModel.getTransactionList(+id);
  if (result) {
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(500).json({
      success: false,
      message: "Error... !",
    });
  }
});
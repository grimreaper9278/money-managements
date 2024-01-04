const asyncHandler = require("../middlewares/async");
const TransactionModel = require("../models/transaction");
const Response = require("../utils/response");

// @desc        Get user transaction list
// @route       GET /api/transaction/list
// @access      Private
exports.list = asyncHandler(async (req, res, next) => {
  const { id } = req.query;
  const result = await TransactionModel.getTransactionList(+id);
  if (result) {
    res.status(200).json(new Response({ success: true, data: result }));
  } else {
    res.status(500).json(
      new Response({
        success: false,
        message: "Error... !",
      })
    );
  }
});

// @desc        Expense
// @route       POST /api/transaction/expense
// @access      Private
exports.transaction = asyncHandler(async (req, res, next) => {
  const result = await TransactionModel.transaction(req.body);
  if (result) res.status(200).json(new Response());
  else
    res.status(500).json(
      new Response({
        success: false,
        message: "Error... !",
      })
    );
});

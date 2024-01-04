const asyncHandler = require("../middlewares/async");
const WalletModel = require("../models/wallet");
const Response = require("../utils/response");

// @desc        Get user wallet amount
// @route       GET /api/wallet/amount
// @access      Private
exports.userAmount = asyncHandler(async (req, res, next) => {
  const { id } = req.query;
  const result = await WalletModel.getUserAmount(+id);
  if (result) res.status(200).json(new Response({ data: result }));
  else
    res
      .status(500)
      .json(new Response({ success: false, message: "Error ...!" }));
});

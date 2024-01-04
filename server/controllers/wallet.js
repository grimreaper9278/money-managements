const asyncHandler = require("../middlewares/async");
const WalletModel = require("../models/wallet");

// @desc        Get user wallet amount
// @route       GET /api/wallet/amount
// @access      Private
exports.userAmount = asyncHandler(async (req, res, next) => {
  const { id } = req.query;
  const result = await WalletModel.getUserAmount(+id);
  if (result) {
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(500).json({
      success: false,
      message: "Error... !",
    });
  }
});

// @desc        sign in user
// @route       GET /api/auth/login
// @access      Public
exports.login = asyncHandler(async (req, res, next) => {
  const { success, message, token } = await UserModel.login(req.body);
  if (!success) res.send({ success, message });
  else res.send({ success, token });
});

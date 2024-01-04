const asyncHandler = require("../middlewares/async");
const UserModel = require("../models/user");
const Response = require("../utils/response");

// @desc        register new user
// @route       GET /api/auth/register
// @access      Public
exports.register = asyncHandler(async (req, res, next) => {
  const result = await UserModel.register(req.body);
  if (result) {
    res.status(201).json(new Response());
  } else {
    res.status(500).json(
      new Response({
        success: false,
        message: "Error while registering...",
      })
    );
  }
});

// @desc        sign in user
// @route       GET /api/auth/login
// @access      Public
exports.login = asyncHandler(async (req, res, next) => {
  const { success, message, token } = await UserModel.login(req.body);
  if (!success) res.send(new Response({ success, message }));
  else res.send(new Response({ success, data: token }));
});

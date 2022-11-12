const express = require("express");
const router = express.Router();
const { SignUp, SignIn } = require("../Controllers/authController");
const {
  validation,
  signupValidation,
  loginValidation,
} = require("../Middleware/validation");

router.post("/sign-up", signupValidation, validation, SignUp);
router.post("/sign-in", loginValidation, validation, SignIn);

module.exports = router;

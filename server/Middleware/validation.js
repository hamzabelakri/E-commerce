const { body, validationResult } = require("express-validator");

const signupValidation = [
  body("name", "you must type your name").isEmpty(),
  body("email", "error in format email").isEmail(),
  body("password", "the passsword must be 6 caracter at least").isLength({
    min: 6,
  }),
];
const loginValidation = [
  body("email", "error in format email").isEmail(),
  body("password", "the passsword must be 6 caracter at least").isLength({
    min: 6,
  }),
];

const validation = async (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  next();
};
module.exports = { validation, signupValidation, loginValidation };

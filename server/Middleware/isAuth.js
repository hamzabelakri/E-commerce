const User = require("../Models/Product");
const jwt = require("jsonwebtoken");
const isAuth = async (req, res, next) => {
  try {
    const token = req.header("token");
    const verifyToken = await jwt.verify(token, process.env.KEY);
    if (!verifyToken) {
      return response.status(401).json({ msg: "you are not authorized" });
    }
    const user = await User.findById(verifyToken.id);
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ msg: "something wrong" });
  }
};
module.exports = isAuth;

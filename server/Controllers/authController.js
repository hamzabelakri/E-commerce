const User= require('../Models/User')
const mongoose = require("mongoose");
const jwt= require('jsonwebtoken')
const bcrypt= require('bcrypt')

const SignUp = async (req, res) => {
    const userInfo = req.body;
    try {
      const searchedUser = await User.findOne({ email: userInfo.email });
      if (searchedUser) {
        return res.status(401).json({ errors: [{ msg: "user already exist" }] });
      }
      const hashedPassword = await bcrypt.hash(userInfo.password, 10);
      const user = new User({
        username: userInfo.username,
        email: userInfo.email,
        password: hashedPassword,
      });
      await user.save();
      const token = jwt.sign(
        { username: user.username, email: user.email, id: user._id },
        process.env.KEY
      );
      res.status(200).json({ msg: `welcome aboard ${user.username}` , user, token});
    
  } catch (error) {
    res.status(400).json({ msg: "failed to sign up" });
  }
}; 



const SignIn = async (req, res) => {
    const userInfo = req.body;
  
    try {
      const user = await User.findOne({ email: userInfo.email });
      if (!user) {
        return res
          .status(401)
          .json({ errors: [{ msg: "you must register before" }] });
      }
      const result = await bcrypt.compare(userInfo.password,user.password);
      if (result==true) {
    
     /*    const token = jwt.sign(
          { username: user.username, email: user.email, id: user._id },
          process.env.KEY
        ); */
        res.status(200).json({ msg: `welcome back ${user.username}`, user });
      } else {
        res.status(401).json({ errors: [{ msg: "wrong password" }] });
      }
    } catch (error) {
      res.status(400).json({ errors: [{ msg: "login failed" }] });
    }
  };

  module.exports = { SignIn, SignUp };

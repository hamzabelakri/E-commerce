const express = require('express');
const router=express.Router();
const {SignUp, SignIn}=require('../Controllers/authController')




router.post("/sign-up",SignUp )
router.post("/sign-in",SignIn )


module.exports = router
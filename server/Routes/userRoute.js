const express= require('express')
const router = express.Router();
const {getAllUser}= require('../Controllers/userController')


router.get('/',getAllUser)



module.exports =router
const express=require('express');
const router=express.Router();
const {getAllMessages,postMessage}=require('../Controllers/MessageController')
const isAuth=require('../Middleware/isAuth');
const isAdmin=require('../Middleware/isAdmin')
router.post('/',postMessage)
router.get('/',getAllMessages)



 


module.exports =router
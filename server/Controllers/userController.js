const User = require('../Models/User')


const getAllUser= async (req, res) => {
    
    try {
        
        const users= await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({msg:"failed to get users"})
    }
}



module.exports ={getAllUser}
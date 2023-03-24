const express =require("express")
const{getUsers,getUser,createUser,deleteUser,updateUser}=require("../controllers/userController")
const router=express.Router()
router.get('/',getUsers)
router.get('/:email',getUser)
router.post('/',createUser)
router.delete('/:email',deleteUser)
router.patch('/:email',updateUser)
module.exports= router
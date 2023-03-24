const User=require("../models/Schema")
const mongoose=require("mongoose")
//get all users
const getUsers=async (req,res)=>{
    const users=await User.find({}).sort({createdAt:-1})
    res.status(200).json(users)
}
//get a single user
const getUser=async(req,res)=>{
    const{email}=req.params
    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).json({error:"No such user"})
    // }
    const user=await User.findOne({email:email})
    if(!user){
        return res.status(404).json({error:'No such user'})
    }
    res.status(200).json(user)
}
//create a new user
const createUser=async (req,res)=>{
    const{ name,
        age,
        email,
        gender,
        mobileNumber,
        birthday,
        city,
        state,
        country,
        address1,
        address2}=req.body
    try{
        const user=await User.create({ 
            name,
            age,
            email,
            gender,
            mobileNumber,
            birthday,
            city,
            state,
            country,
            address1,
            address2})
        res.status(200).json(user)

    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
//delete a user
const deleteUser=async(req,res)=>{
    const {email}=req.params
    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     res.status(400).json({error:"No such user"})
    // }
    const user=await User.findOneAndDelete({email:email})
    if(!user){
        return res.status(404).json({error:"No such user"})
    }
    res.status(200).json(user)
}
//update a user
const updateUser=async(req,res)=>{
    const {email}=req.params
    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     res.status(400).json({error:"No such user"})
    // }
    const user=await User.findOneAndUpdate({email:email},{
        ...req.body
    })
    if(!user){
        return res.status(404).json({error:"No such user"})
    }
    res.status(200).json(user)
    
}
module.exports={
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
}
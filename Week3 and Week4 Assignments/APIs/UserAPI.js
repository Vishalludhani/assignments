import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifytoken.js'
export const userApp = exp.Router()

//USER API ROUTES

//create
userApp.post('/users', async (req, res) => {
    //get user from req
    let newUser = req.body
    //create new user document
    let hashedpassword = await hash(newUser.password,12)
    newUser.password=hashedpassword
    //We Have to replace the password with hash password
    let newUserDoc = new UserModel(newUser)
    //save the document in database
    await newUserDoc.save()
    //send response
    res.status(201).json({ message: "User Created and Saved" })
})

//read
userApp.get('/users', async (req, res) => {
    //read users from db
    let userList = await UserModel.find()
    res.status(200).json({ message: "users", payload: userList })
})



userApp.post("/auth",async(req,res)=>{
    let userCred=req.body
    //check for username
    let userofdb=await UserModel.findOne({username:userCred.username})
    //if user not found
    if(userofdb===null) return res.status(404).json({message:"Invalid username"})
    //compare password
    let status = await compare(userCred.password,userofdb.password)
    //check if password matched
    if(!status) return res.status(404).json({message:"Invalid password"})
    //create signed token
    let signedtoken = jwt.sign({username:userCred.username},'abcdef',{expiresIn:30})
    //save token as httponly cookie
    res.cookie('token',signedtoken,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    //send signed token
    res.status(200).json({message:"login success",token:signedtoken})
})
//read users by ObjectId
userApp.get("/users/:id", async (req, res) => {
    //get object id from req
    let ObjectId = req.params.id
    //find user in db
    let userObj = await UserModel.findById(ObjectId)
    //send res
    res.status(200).json({ message: "User: ", payload: userObj })
})


//Update
userApp.put("/users/:id", async (req, res) => {
    //get ObjectId
    let ObjectId = req.params.id
    //get modified user from req
    let modifiedUser = req.body
    //make update
    let latestUser = await UserModel.findByIdAndUpdate(ObjectId, { $set: { ...modifiedUser } }, { new: true })
    //send res
    res.status(200).json({ message: "Modified User: ", payload: latestUser })
})


//Delete
userApp.delete("/users/:id",async(req,res)=>{
    let ObjectId=req.params.id
    //delete user by ID
    let deletedUser=await UserModel.findByIdAndDelete(ObjectId)
    res.status(200).json({message: "User removed",payload:deletedUser})
})


userApp.get("/test",verifyToken,(req,res)=>{
    res.status(200).json({message: "Test route"})
})
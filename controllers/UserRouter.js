const express = require("express")
const router = express.Router()
const usermodel = require("../models/UserModel")

router.post("/register",async(req,res)=>{
    let data = req.body //read values
    let blog = new usermodel(data)
    let result = await blog.save()
    res.json({
        status:"success"
    })
})
module.exports=router

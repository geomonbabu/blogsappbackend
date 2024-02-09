const express = require("express")
const router = express.Router()
const usermodel = require("../models/UserModel")
const bcrypt = require("bcryptjs")

HashGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/register",async(req,res)=>{
    //let data = req.body //read values
    let{data} = {"data":req.body}
    let password = data.password
    HashGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let blog = new usermodel(data)
            let result = blog.save()
                 res.json({
                 status:"success"
                }
                )
    })
})
module.exports=router

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
    // HashGenerator(password).then(
    //     (hashedPassword)=>{
    //         console.log(hashedPassword)
    //         data.password=hashedPassword
    //         console.log(data)
    //         let blog = new usermodel(data)
    //         let result = blog.save()
    //              res.json({
    //              status:"success"
    //             }
    //             )
    // })
    //another method
    const hashedPassword=await HashGenerator(password)
    data.password=hashedPassword
    let blog = new usermodel(data)
            let result = blog.save()
                 res.json({
                 status:"success"
                }
                )
})
router.post("/signin",async(req,res)=>{
    let data=req.body
    let email = req.body.emailid
    let input = await usermodel.findOne({"emailid": email})
    if(!input){
        return res.json({
            status:"invalid email"
        })
    }
    else {
        console.log(input)
        let dbPass=input.password
        let orgPass=req.body.password
        console.log(dbPass)
        console.log(orgPass)
        const match = await bcrypt.compare(orgPass,dbPass)
        if(!match)
        {
            return res.json({
                status:"incorrect password"
            })
        }
        else {
            res.json({
                status:"success"
            })
        }
    }
    console.log(email)
    console.log(pass)
})
module.exports=router

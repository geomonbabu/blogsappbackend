const express = require("express")
const router = express.Router()
const postmodel = require("../models/PostModel")

router.post("/addpost",async(req,res)=>{
    let data = req.body
    let posts = new postmodel(data)
    let result = await posts.save()
    res.json({
        status:"success"
    })
})
router.get("/viewpost",async(req,res)=>{
    let output = await postmodel.find()
    .populate("userId","name address -_id")
    .exec()
    res.json({
        output
    })
})
module.exports=router

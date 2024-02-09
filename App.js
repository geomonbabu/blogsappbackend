const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userrouter = require("./controllers/UserRouter")
const postrouter = require("./controllers/PostRouter")

//aliasname
const blog=express()


//middleware
blog.use(express.json())
blog.use(cors())
mongoose.connect("mongodb+srv://megeomonbabu:geo12345@cluster0.i1dx7ax.mongodb.net/blogdb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

//routing or api
blog.use("/api/blog",userrouter)
blog.use("/api/posts/",postrouter)

blog.listen(3001,()=>{
    console.log("server is running")
})
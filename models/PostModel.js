const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"user"
        },
        post:{
            type:String,
            required:true
        },
        posteddate:{
            type:Date,
            default:Date.now
        }
    }
)
module.exports = mongoose.model("posts",PostSchema)
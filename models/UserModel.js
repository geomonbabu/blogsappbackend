const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        name:String,
        age:String,
        phonenumber:String,
        address:String,
        pincode:String,
        emailid:String,
        password:String   
    }
)
module.exports = mongoose.model("user",UserSchema)
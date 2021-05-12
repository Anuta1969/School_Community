import mongoose from "mongoose";

const User = mongoose.model('User',{
    name:{type:String,trim:true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

export default User

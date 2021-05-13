import mongoose from "mongoose";


const Student = mongoose.model('Student',{
    photo:{type:String},
    name:{type:String,trim:true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    stack: {type: String},
    language: {type: String},
    socialLinkedin: {type: String},
    socialGitHab: {type: String},
    placeWork:String,
    vacancy:[{type:mongoose.Schema.Types.ObjectId , ref: "Vacantion"}],
    commit:[{type:mongoose.Schema.Types.ObjectId , ref: "Commit"}],
    resume:String,
    phone: Number,
    isAuth:{type:Boolean, default:false},
    admin:{type:Boolean, default:false},
})

export default Student

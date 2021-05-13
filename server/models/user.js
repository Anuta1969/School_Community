import mongoose from "mongoose";


const Student = mongoose.model('Student',{
    foto:{type:String},
    name:{type:String,trim:true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    steck: {type: String, required: true},
    language: {type: String},
    socialLinkedin: {type: String},
    socialGitHab: {type: String},
    placeWork:String,
    vacancy:[{type:mongoose.Schema.Types.ObjectId , ref: "Vacansion"}],
    commit:[{type:mongoose.Schema.Types.ObjectId , ref: "Commit"}],
    resume:String,
    fon: Number,
    student:{type:Boolean, default:false},
    admin:{type:Boolean, default:true},
})

export default Student

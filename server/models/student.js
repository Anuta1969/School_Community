import mongoose from "mongoose";


const Student = mongoose.model('Student',{
    photo:{type:String},
    name:{type:String,trim:true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    year: {type: String},
    group: {type: String},
    city: {type: String},
    stack: {type: String},
    language: {type: String},
    socialLinkedin: {type: String},
    socialGitHab: {type: String},
    placeWork:{type: String},
    vacancy:[{type:mongoose.Schema.Types.ObjectId , ref: "Vacantion"}],
    comment:[{type:mongoose.Schema.Types.ObjectId , ref: "Comment"}],
    resume:{type: String},
    phone: {type: Number},
    isAuth:{type:Boolean, default:false},
    admin:{type:Boolean, default:false},

})

export default Student

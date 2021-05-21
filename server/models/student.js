import mongoose from "mongoose";

const Student = mongoose.model('Student',{
    photo:{type:String},
    name:{type:String,trim:true},
    lastName:{type:String,default:''},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    year: {type: String,default:''},
    group: {type: String,default:''},
    city: {type: String,default:''},
    stack: {type: String},
    language: {type: String},
    socialTelegramm: {type: String},
    instagramm:{type: String},
    socialGitHab: {type: String},
    placeWork:{type: String},

    vacancy:[{type:mongoose.Schema.Types.ObjectId , ref: "Vacantion"}],
    comment:[{type:mongoose.Schema.Types.ObjectId , ref: "Comment"}],
    resume:{type: String},
    phone: {type: Number},
    isAuth:{type:Boolean, default:false},
    admin:{type:Boolean, default:false},
    jobId:{type: String},
})

export default Student

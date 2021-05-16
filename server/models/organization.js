import mongoose from "mongoose";

const Organization = mongoose.model('Organization',{

    name:{type:String,trim:true},
    rate: {type: Number,default:0},
    comment: {type:String},
    //vacansion: {type:String},
    vacantion: [{type:mongoose.Schema.Types.ObjectId, ref:'Vacansion'}],
    
    // comment:{type:mongoose.Schema.Types.ObjectId, ref:'Comment'},
    
    
    // name:{type:String,trim:true},
    // rate: {type: Number, required: true},
    // comment:{type:mongoose.Schema.Types.ObjectId, ref:'Comment'},
    // vacansion: {type:mongoose.Schema.Types.ObjectId, ref:'Vacantion'},
})

export default Organization

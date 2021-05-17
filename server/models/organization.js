import mongoose from "mongoose";

const Organization = mongoose.model('Organization',{
    name:{type:String,trim:true},
    rate: [{type: Number,default:0}],
    comment: [{type:String}],
    vacantion: [{type:mongoose.Schema.Types.ObjectId, ref:'Vacansion'}],
    findName:{type:String}
})

export default Organization

import mongoose from "mongoose";

const Organization = mongoose.model('Organization',{
    name:{type:String,trim:true},
    totalRating: {type: Number,default:0},
    rate: [{type: Number,default:0}],
    comment:  [{type:mongoose.Schema.Types.ObjectId, ref:'Comment'}],
    vacantion: [{type:mongoose.Schema.Types.ObjectId, ref:'Vacansion'}],
    findName:{type:String}
})

export default Organization

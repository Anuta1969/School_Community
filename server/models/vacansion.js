import mongoose from "mongoose";

const Vacansion = mongoose.model('Vacansion',{
  name:{type:String,trim:true,required: true},
  organization: {type: String, required: true},
  date:{type:Date,required: true},
  relevance: {type:Boolean,default:true,required: true},
  description: {type:String,required: true},
  contacts: {type:String},
})

export default Vacansion

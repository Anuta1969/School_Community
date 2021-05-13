import mongoose from "mongoose";

const Vacansion = mongoose.model('Vacansion',{
  name:{type:String,trim:true},
  organization: {type: String, required: true},
  date:{type:Date},
  relevance: {type:Boolean,default:true},
  description: {type:String},
  contacts: {type:String},
})

export default Vacansion

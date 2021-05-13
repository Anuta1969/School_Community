import mongoose from "mongoose";

const Vacantion = mongoose.model('Vacantion',{
  vacantion:{type:String,trim:true,required: true},
  organization: {type: String, required: true},
  date:{type:Date},
  relevance: {type:String},
  description: {type:String,required: true},
  contacts: {type:String},
})

export default Vacantion

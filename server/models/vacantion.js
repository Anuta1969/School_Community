import mongoose from "mongoose";

const Vacantion = mongoose.model('Vacantion',{
  vacantion:String,
  organization: {type: String},
  date:{type:Date},
  relevance: {type:String},
  description: {type:String,required: true},
  contacts: {type:String},
})

export default Vacantion

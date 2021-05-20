import mongoose from "mongoose";

const Vacantion = mongoose.model('Vacantion', {
    vacantion: String,
    organization: {type: String},
    date: {type: Date},
    relevance: {type: Boolean, default: true},
    description: {type: String},
    contacts: {type: String},
    userID: {type: mongoose.Schema.Types.Object, ref: 'Student'},
    salary:{type:String},
    organizationId:{type:String}
})

export default Vacantion

import mongoose from "mongoose";

const Comment = mongoose.model('Comment',{
    text:String,
    author:{type:mongoose.Schema.Types.ObjectId, ref:'Student'},
    authorName:String,
    organization:{type:mongoose.Schema.Types.ObjectId, ref:'Organization'}
})

export default Comment

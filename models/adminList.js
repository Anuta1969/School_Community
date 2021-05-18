import mongoose from "mongoose";

const AdminList = mongoose.model('AdminList',{
    userId:{
        type:mongoose.Schema.Types.Object,
        ref:'Student'
    },
})

export default AdminList

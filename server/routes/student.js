import express from 'express'
import User from '../models/student.js'
import path  from 'path'
import multer from 'multer'
const router = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(123)
    cb(null, 'public/img')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})
console.log("1111111", storage);
const upload = multer({ storage: storage })

router.post('/addphoto/:id',upload.single('avatar'), async(req,res)=>{
  // console.log("--------------",req.file.originalname);
  const img = req.file.filename
  
  // console.log(img);
  const idUser = req.params
  // console.log("idUser",idUser.id);
  try {
    const UserOne = await User.findOne({_id:idUser.id}) 
    UserOne.photo=img
   await UserOne.save()
    // console.log("UserOne",UserOne);
    res.status(200).json({UserOne})
    
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }

})

export default router

import express from "express";
import User from "../models/student.js";
import path from "path";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(123);
    cb(null, "public/img");
  },
  filename: function (req, file, cb) {

    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});
console.log("1111111", storage);
const upload = multer({ storage: storage });

  

router.post("/addphoto/:id", upload.single("avatar"), async (req, res) => {
  console.log("--------------",req.file.filename);
  const img = req.file.filename;
  console.log(img);
  const idUser = req.params;
  // console.log("idUser",idUser.id);
  try {
    const UserOne = await User.findOne({ _id: idUser.id });
    UserOne.photo = img;
    await UserOne.save();
    // console.log("UserOne",UserOne);
    res.status(200).json({ UserOne });
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
});

router.put("/changetext", async (req, res) => {
  const {
    id,
    name,
    phone,
    email,
    year,
    group,
    city,
    stack,
    language,
    socialLinkedin,
    socialGitHab,
    placeWork,
  } = req.body;
  console.log(city);
  try {
    const UserOne = await User.findOne({ _id: id });
    console.log(UserOne);
    UserOne.name = name;
    UserOne.email = email;
    UserOne.phone = phone;
    UserOne.year = year;
    UserOne.group = group;
    UserOne.city = city;
    UserOne.stack = stack;
    UserOne.language = language;
    UserOne.socialLinkedin = socialLinkedin;
    UserOne.socialGitHab = socialGitHab;
    UserOne.placeWork = placeWork;

    await UserOne.save();
    res.status(200).json({ UserOne });
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
});

router.post('/addrezume/:id', upload.single("rezume"), async(req,res)=>{
  console.log("file--------------");
  const rezume = req.file.filename
  const idUser = req.params;
  try {
    const UserOne = await User.findOne({ _id: idUser.id });
    UserOne.resume = rezume;
    await UserOne.save();
    console.log("UserOne",UserOne);
    res.status(200).json({ UserOne });
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
})

export default router;

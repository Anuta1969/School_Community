import express from "express";
import User from "../models/student.js";
import path from "path";
import multer from "multer";
const router = express.Router();


// for photo
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


// for resume
const storagePdf = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("resume-----------");
    cb(null, "public/resume");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});
console.log("res-----55", storagePdf);
const pdfUpload = multer({ storage: storagePdf });



router.post("/addphoto/:id", upload.single("avatar"), async (req, res) => {
  console.log("--------------", req.file.filename);
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

router.post('/addresume/:id', upload.single("resume"), async(req,res)=>{
  const resume = req.file.filename

  try {
    const UserOne = await User.findById({_id:req.params.id});


    UserOne.resume = resume;
    await UserOne.save();
    console.log(UserOne);
    res.status(200).json( resume );
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
});
export default router;

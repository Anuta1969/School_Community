import express from "express";
import User from "../models/student.js";
import path from "path";
import multer from "multer";
import Student from "../models/student.js";

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
const upload = multer({storage: storage});
const storagePdf = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/resume");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
    },
});
const pdfUpload = multer({storage: storagePdf});


router
    .post("/addphoto/:id", upload.single("avatar"), async (req, res) => {
        const img = req.file.filename;
        const idUser = req.params;
        try {
            const UserOne = await User.findOne({_id: idUser.id});
            UserOne.photo = img;
            await UserOne.save();
            res.status(200).json({UserOne});
        } catch (error) {
            res.status(404).json({succes: false, msg: error.message});
        }
    })

    .put("/:id", async (req, res) => {
const id = req.params.id
        const {
            name,
            lastName,
            phone,
            email,
            year,
            group,
            city,
            stack,
            language,
            socialTelegramm,
            socialGitHab,
            instagramm,            
            placeWork,
        } = req.body;
        try {
            const UserOne = await User.findOne({_id: id});
            console.log(UserOne);
            UserOne.name = name;
            UserOne.lastName = lastName;
            UserOne.email = email;
            UserOne.phone = phone;
            UserOne.year = year;
            UserOne.group = group;
            UserOne.city = city;
            UserOne.stack = stack;
            UserOne.language = language;
            UserOne.socialTelegramm = socialTelegramm;
            UserOne.socialGitHab = socialGitHab;
            UserOne.instagramm = instagramm;
            UserOne.placeWork = placeWork;

            await UserOne.save();
            res.status(200).json({UserOne});
        } catch (error) {
            res.status(404).json({succes: false, msg: error.message});
        }
    })


    .post('/addresume/:id', pdfUpload.single("resume"), async (req, res) => {
        const resume = req.file.filename
        const {id} = req.params
        try {
            const UserOne = await User.findById({_id: id});
            UserOne.resume = resume;
            await UserOne.save();
            res.status(200).json(UserOne);
        } catch (error) {
            res.status(404).json({succes: false, msg: error.message});
        }
    })


    .get('/inits', async (req, res) => {
        try {
            const list = await Student.find()
            res.status(200).json({succes: true, list});
        } catch (error) {
            res.status(404).json({succes: false, msg: error.message});
        }
    })


export default router;

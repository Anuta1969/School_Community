import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'
import {body, check, validationResult} from "express-validator";
import {authMiddleware} from '../middleware/authMiddleware.js'
import Student from "../models/student.js";
import path  from 'path'
import multer from 'multer'
const router = express.Router()
import AdminList from "../models/adminList.js";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
})
const upload = multer({ storage: storage })

router.post('/registration',
    upload.single('photo'),[
    check('email', "Uncorrect email").isEmail(),
    check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3, max:12})]
   ,async (req, res) => {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Incorrect request", errors})
            }
    try {

            const photoUser = req.file.filename
            const {email, password,name,phone} = req.body
            const candidate = await Student.findOne({email})
            if(candidate) {
                return res.status(201).json({message: `Student with email ${email} already exist`})
            }
            const hashPassword = await bcrypt.hash(password, 8)
            const student = await Student.create({email, password:hashPassword,name,phone,photo:photoUser})
            const request = await AdminList.create({userId:student})
            // const token = jwt.sign({id: student.id}, config.get("secretKey"), {expiresIn: "1h"})
          
            return   res.json({message: "заявка на рассмотрении",request,student})
        } catch (e) {
            res.send({message: "Server error"})
        }
    })
router.post('/login',
    async (req, res) => {
        try {
            const {email, password} = req.body
            // console.log(req.body);
            const student = await Student.findOne({email})
            // console.log(student+'111');
            if (!student || !student.isAuth) {
                return res.status(404).json({message: "User not found"})
            }
            const isPassValid = bcrypt.compareSync(password, student.password)
            if (!isPassValid) {
                return res.status(400).json({message: "Invalid password"})
            }
            const token = jwt.sign({id: student.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                student
            })
        } catch (e) {
            res.send({message: "Server error"})
        }
    })
router.get('/auth', authMiddleware,
    async (req, res) => {
        try {
            const student = await Student.findOne({_id: req.student.id})
            // console.log(student)

             const token = jwt.sign({id: student.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                student
            })
        } catch (e) {
            res.send({message: "Server error"})
        }
    })
export default router

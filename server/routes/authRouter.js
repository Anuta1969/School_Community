import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'
import {check, validationResult} from "express-validator";
import {authMiddleware} from '../middleware/authMiddleware.js'
import Student from "../models/student.js";
import path  from 'path'
import nodemailer from 'nodemailer'
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
    check('password', 'Пароль должен быть не менее 6 символов').isLength({min:6, max:50})]
   ,async (req, res) => {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Incorrect request", errors})
            }
    try {
        const {email, password,name,phone ,year,group,city} = req.body
        console.log(req.body)
        const photoUser = req.file.filename
            const candidate = await Student.findOne({email})
            if(candidate) {
                return res.status(201).json({message: `Student with email ${email} already exist`})
            }
            const hashPassword = await bcrypt.hash(password, 8)
            const student = await Student.create({email, password:hashPassword,name,phone,photo:photoUser,year,group,city})
            const request = await AdminList.create({userId:student})
        async function mail(){
            let transporter =  nodemailer.createTransport({
                service: 'Mail.ru',
                port: 587,
                secure: true,
                auth: {
                    user: 'elbrus-in@mail.ru', // generated ethereal user
                    pass: 'rORTytyU2a3*', // generated ethereal password
                }
            })
            await transporter.sendMail({
                from: 'elbrus-in@mail.ru' ,
                to: 'hr@elbrusboot.camp',
                subject:'Заявка',
                text:`Привет Надежда, меня зовут ${name}, пожалуйста рассмотри мою заявку в ElbrusIn!`,
                html:`Привет Надежда, меня зовут ${name}, пожалуйста рассмотри мою заявку в ElbrusIn!`
            })
        }
        mail().catch(console.error)
            return   res.json({message: "заявка на рассмотрении",request,student})
        } catch (e) {
            res.json({message: "Server error"})
        }
    })


router.post('/login',
    async (req, res) => {
        console.log(req.body)
        try {
            const {email, password} = req.body
            const student = await Student.findOne({email})
            if (!student || !student.isAuth) {
                return res.status(404).json({message: "Пользователь не найден"})
            }
            const isPassValid = bcrypt.compareSync(password, student.password)
            if (!isPassValid) {
                return res.status(400).json({message: "Не верный пароль"})
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

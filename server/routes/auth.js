import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'
import {check,validationResult} from "express-validator";
import {authMiddleware} from '../middleware/authMiddleware.js'
import Student from "../models/student.js";
const router = express.Router()
import AdminList from "../models/adminList.js";


router.post('/registration',
    [
        check('email', "Uncorrect email").isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3, max:12})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Incorrect request", errors})
            }
            const {email, password,name,phone} = req.body

            const candidate = await Student.findOne({email})
            if(candidate) {
                return res.status(201).json({message: `Student with email ${email} already exist`})
            }
            const hashPassword = await bcrypt.hash(password, 8)
            console.log(hashPassword)
            const student = await Student.create({email, password:hashPassword,name,phone})
            const request = await AdminList.create({userId:student})
            console.log(request)
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
            const student = await Student.findOne({email})
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
                student: {
                    id: student.id,
                    email: student.email,
                }
            })
        } catch (e) {
            res.send({message: "Server error"})
        }
    })

router.get('/auth', authMiddleware,
    async (req, res) => {

        try {
            const user = await Student.findOne({_id: req.user.id})
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })


export default router

import express from "express";
import Student from "../models/student.js";
import AdminList from "../models/adminList.js";
import mongoose from "mongoose";
import nodemailer from 'nodemailer'

const router = express.Router()

router
    .get('/admin/request' ,async (req,res)=>{
        try {
            const request = await AdminList.find()
            const list = await request.map(el => el.userId)
            const result = await Promise.all(list.map(el => {
                return Student.findById(el)
            }))
            res.status(200).json({succes: true, result});
        }catch (error){
            res.status(400).json({succes: false, message: error.message});
        }
    })

    .get('/admin/student/:id',async (req,res)=>{
        try {
            const {id} = req.params
            const student = await Student.findById(id)
            res.status(200).json({succes: true, student});
        }catch (error){
            res.status(400).json({succes: false, message: error.message});
        }
    })

    .delete('/admin/student/:id',async (req,res)=>{
        try {
            const {id} = req.params
            const student = await Student.findById(id)
            const newId = new  mongoose.Types.ObjectId(id)
            let request = await AdminList.findOneAndDelete({userId:newId})
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
                    to: student.email,
                    subject:'Ответ',
                    text:`Заявка отклонена ElbrusIn`,
                    html:`Заявка отклонена ElbrusIn`
                })
            }
            mail().catch(console.error)
            await Student.findByIdAndDelete(id)
            res.status(200).json({succes: true, request});
        }catch (error){
            res.status(400).json({succes: false, message: error.message});
        }
    })

    .post('/admin/student/:id',async (req,res)=>{
        try{
            const {id} = req.params
            const student = await Student.findById(id)
            student.isAuth = true
            await student.save()
            const newId = new  mongoose.Types.ObjectId(id)
            let request = await AdminList.findOneAndDelete({userId:newId})
            console.log(student)
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
                    to: student.email,
                    subject:'Заявка',
                    text:`Заявка одобрена в ElbrusIn`,
                    html:`Заявка одобрена в ElbrusIn`
                })
            }
            mail().catch(console.error)
            res.status(200).json({succes: true,request});
        }catch (error){
            res.status(400).json({succes: false, msg: error.message});
        }
    })

export default router

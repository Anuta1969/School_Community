import express from "express";
import Student from "../models/student.js";
import AdminList from "../models/adminList.js";
import mongoose from "mongoose";
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
            const newId = new  mongoose.Types.ObjectId(id)
            let request = await AdminList.findOneAndDelete({userId:newId})
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
            // const user = await User.findById(student.user)
            student.isAuth = true
            await student.save()
            // console.log(student)
            const newId = new  mongoose.Types.ObjectId(id)
            let request = await AdminList.findOneAndDelete({userId:newId})
            res.status(200).json({succes: true,request});
        }catch (error){
            res.status(400).json({succes: false, msg: error.message});
        }
    })


export default router

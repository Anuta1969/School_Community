import express from 'express'
import Comment from '../models/comment.js'
import Organization from '../models/organization.js'
import Vacantion from '../models/vacantion.js'


const router = express.Router()

router
    .get('/', async (req, res) => {
            try {
                const organization = await Organization.find().populate({path:'vacantion', model:Vacantion})
                return res.json(organization)
            } catch (e) {
                res.send({message: "Server error"})
            }
        })

    .get('/org/:id', async (req, res) => {
            const id = req.params.id
            try {
                const organization = await Organization.findOne({_id: id}).populate({path:'vacantion', model:Vacantion}).populate('Comment');
                res.json(organization)
            } catch (error) {
                res.send({message: "Server error"})
            }
        })

    .post('/add', async (req, res) => {
      try {
      let {organization, comment, rate} = req.body;
        const newOrganization = await Organization.create({
            name: organization,
            comment,
            rate,
            findName:organization.toLowerCase()
        });
        res.status(201).json({newOrganization})
      } catch (error){
          res.send({message: "Server error"})
      }
    })

    .post('/update', async (req, res) => {
      try {
        let {organization, newComment, newRate, student} = req.body
        let updatedOrg = await Organization.findOne({_id: organization._id})

        await Comment.create({
          text: newComment,
          author: student,
          organization: organization._id
        })

        await updatedOrg.comment.push(newComment)
        await updatedOrg.rate.push(newRate)
        await updatedOrg.save()

        // const newDBComment = 
       

        // res.status(201).json({newDBComment})
        res.status(201)
      } catch (error) {
        res.send({message: "Server error"})
      }
    })


export default router

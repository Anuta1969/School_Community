import express from 'express'
import Comment from '../models/comment.js'
import Organization from '../models/organization.js'
import Student from '../models/student.js'
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
                
              let organization = await Organization.findOne({_id: id}).populate({path:'vacantion', model:Vacantion})

              await organization.save()
              
              let comments = await Organization.findOne({_id: id}).populate({path:'comment', model:Comment})
              await comments.save()

              res.json( {organization, comments} )
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
        let updatedOrg = await Organization.findOne( {_id: organization._id} )
        let authorName = await Student.findOne( {_id: student} )
        
        const newDBComment = await Comment.create({
          text: newComment,
          author: student,
          authorName: authorName.name,
          organization: organization._id
        })
        
        await updatedOrg.comment.push(newDBComment._id)
        await updatedOrg.save()
        await updatedOrg.rate.push(newRate)
        await updatedOrg.save()
        res.status(201).json(updatedOrg)
      } catch (error) {
        res.send({message: "Server error"})
      }
    })

    .get('/initOrganizations', async (req, res) => {
      try {
        // let {organization} = req.body
        // let updatedOrg = await Organization.findOne( {_id: organization._id} )
        let updatedOrg = await Organization.find( )
        // console.log(updatedOrg);
        res.status(201).json(updatedOrg)
      } catch (error) {
        res.send({message: "Server error"})
      }
    })


export default router

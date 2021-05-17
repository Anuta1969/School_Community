import express from 'express'
import Organization from '../models/organization.js'
import Vacantion from '../models/vacantion.js'

const router = express.Router()

router
    .get('/', async (req, res) => {
            try {
                const organization = await Organization.find()
                return res.json(organization)
            } catch (e) {
                res.send({message: "Server error"})
            }
        })

    .get('/org/:id', async (req, res) => {
            const id = req.params.id
            try {
                const organization = await Organization.findOne({_id: id}).populate({path:'vacantion', model:Vacantion});
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
        let {organization, comment, newRate} = req.body
        console.log(newRate, ">>>>>>>>>>>>>>>>.");
        let updatedOrg = await Organization.findOneAndUpdate({_id: organization._id}, {
          comment,
          rate: rate.push(newRate)
        })
        console.log(updatedOrg);
      } catch (error) {
        res.send({message: "Server error"})
      }
    })


export default router

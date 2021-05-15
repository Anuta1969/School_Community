import express from 'express'
import Organization from '../models/organization.js'
const router = express.Router()

router.get('/',
     async (req, res) => {
        try {
          const organization = await Organization.find()
           return res.json( organization )

        } catch (e) {
            res.send({message: "Server error"})
        }
    })

router.get('/org/:id',
  async (req, res) => {

    const id = req.params.id
  
    try {
      const organization = await Organization.findOne({_id: id})     
      res.json(organization)
    } catch (error) { 
      res.send( {message: "Server error"} )          
    }
  })

 router.post('/add', async (req, res) => {
  let { organization, comment, rate } =
    req.body;
  
  const newOrganization = await Organization.create({
    name: organization,
    comment,
    rate
    });
   res.status(201).json({newOrganization})
});



export default router

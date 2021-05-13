import express from 'express'
import Organization from '../models/organization.js'
const router = express.Router()

router.get('/',
     async (req, res) => {
        try {
           const organization = await Organization.find()
          // console.log(organization);
            return res.json(
                organization
          )

        } catch (e) {
            res.send({message: "Server error"})
        }
    })

export default router

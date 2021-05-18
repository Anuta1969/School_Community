import express from 'express';
import Organization from '../models/organization.js';
import Student from '../models/student.js';
import Vacantion from '../models/vacantion.js';

const router = express.Router();

router
  .get('/', async (req, res) => {
   try{
     const vacantion = await Vacantion.find();
     res.json(vacantion);
   }catch (error){
     res.send({message: "Server error"})
   }
  })

  .get('/:id', async (req, res) => {
   try{
     const vacantion = await Vacantion.findById(req.params.id);
     res.json(vacantion);
   }catch (error){
     res.send({message: "Server error"})
   }
  })

  .post('/', async (req, res) => {
    try{
      let { vacantion, organization, salary,description, id } = req.body;
      let dates = Date.now();
      const searchName = organization.toLowerCase()
      const organizations = await Organization.find({ findName: searchName });
      console.log(organizations);
      const student = await Student.findById(id);
      const newVacantions = await Vacantion.create({
        vacantion,
        organization,
        description,
        salary,
        date: dates,
        contacts: student.name,
        userID: student._id,
      });
      if (organizations.length == 0) {
        await Organization.create({
          name: organization,
          findName:searchName,
          vacantion:newVacantions
        });
      } else {
        await organizations[0].vacantion.push(newVacantions);
        await organizations[0].save();
      }
      res.status(201).json({ newVacantions });
    }catch (error){
      res.send({message: "Server error"})
    }
  })

  .put('/:id', async (req, res) => {
   try{
     let { relevance } = req.body;
     await Vacantion.findByIdAndUpdate(
         { _id: req.params.id },
         {$set: { relevance: relevance}}
     );
     const actualVacantion = await Vacantion.findById(req.params.id )
     console.log(actualVacantion);
     res.json(actualVacantion)
   }catch (error){
     res.send({message: "Server error"})
   }
  });

export default router;

import express from 'express';
import Student from '../models/student.js';
import Vacantion from '../models/vacantion.js';
const router = express.Router();


router.get('/',async(req, res) => {
  const vacantion = await Vacantion.find()
  res.json(vacantion)
})

router.post('/', async (req, res) => {
  let { vacantion, organization, date, relevance, description,id} =
    req.body;
  console.log(req.body);
  const student = await Student.findById(id)
  console.log(student);
  const vacantions = await Vacantion.create({
    vacantion,
    organization,
    date,
    relevance,
    description,
    contacts:student.name,
    userID:student._id
  });

   res.status(201).json({vacantions})
});

export default router;

import express from 'express';
import Student from '../models/student.js';
import Vacantion from '../models/vacantion.js';
const router = express.Router();


router.get('/',async(req, res) => {
  const vacantion = await Vacantion.find()
  res.json(vacantion)
})

router.post('/', async (req, res) => {
  let { vacantion, organization, description,id} =
    req.body;
    let dates = Date.now()
  const student = await Student.findById(id)
  console.log(student);
  const vacantions = await Vacantion.create({
    vacantion,
    organization,
    description,
    date:dates,
    contacts:student.name,
    userID:student._id
  });
console.log(vacantions);
   res.status(201).json({vacantions})
});

export default router;

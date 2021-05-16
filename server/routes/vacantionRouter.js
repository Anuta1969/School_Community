import express from 'express';
import Organization from '../models/organization.js';
import Student from '../models/student.js';
import Vacantion from '../models/vacantion.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const vacantion = await Vacantion.find();
  res.json(vacantion);
});

router.post('/', async (req, res) => {
  let { vacantion, organization, description, id } = req.body;
  let dates = Date.now();
  //console.log(organization);
  const organizations = await Organization.find({ name: organization });
  //console.log(organizations);

  //console.log(newOrganization);

  const student = await Student.findById(id);
  const newVacantions = await Vacantion.create({
    vacantion,
    organization,
    description,
    date: dates,
    contacts: student.name,
    userID: student._id,
  });

  if (organizations.length == 0) {
    console.log('create');
    await Organization.create({
      name: organization,
    });
  } else {
    // console.log(organizations[0]+'>>>>>>>>>>>>>>>>');//
    await organizations[0].vacantion.push(newVacantions);
    await organizations[0].save();
    console.log(organizations[0]+'>>>>>>>>>>>>>>>>');
  }

  res.status(201).json({ newVacantions });
});

export default router;

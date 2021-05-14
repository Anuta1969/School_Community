import express from 'express';
import Vacantion from '../models/vacantion.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { vacantion, organization, date, relevance, description} =
    req.body;
  console.log(vacantion);
  const vacantions = await Vacantion.create(
    vacantion,
    organization,
    date,
    relevance,
    description,
   
  );

  // res.status(201).json({vacantions})
});

export default router;

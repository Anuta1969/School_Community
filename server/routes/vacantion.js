import express from 'express';
import Vacantion from '../models/vacantion.js';
const router = express.Router();

router.post('/', async (req, res) => {
  let { vacantion, organization, date, relevance, description} =
    req.body;
  console.log(req.body);
  const vacantions = await Vacantion.create({
    vacantion,
    organization,
    date,
    relevance,
    description,
   
  });

   res.status(201).json({vacantions})
});

export default router;

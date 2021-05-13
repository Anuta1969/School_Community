import express from 'express';
import Vacantion from '../models/vacantion.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, organization, date, relevance, description, contacts } =
    req.body;
  console.log(req.body + '123456');
  const vacantion = await Vacantion.create(
    name,
    organization,
    date,
    relevance,
    description,
    contacts
  );

  res.status(201).json({vacantion})
});

export default router;

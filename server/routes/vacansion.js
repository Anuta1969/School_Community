import express from 'express';
import Vacansion from '../models/vacansion.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, organization, date, relevance, description, contacts } =
    req.body;
  console.log(req.body + '123456');
  const vacansion = await Vacansion.create(
    name,
    organization,
    date,
    relevance,
    description,
    contacts
  );

  res.status(201).json({vacansion})
});

export default router;

import express from 'express';
import Organization from '../models/organization.js';
import Student from '../models/student.js';
import Vacantion from '../models/vacantion.js';

const router = express.Router();

router
    .get('/', async (req, res) => {
        const vacantion = await Vacantion.find();
        res.json(vacantion);
    })

    .get('/:id', async (req, res) => {
        const vacantion = await Vacantion.findById(req.params.id);
        res.json(vacantion);
    })

    .post('/', async (req, res) => {
        let {vacantion, organization, description,salary, id} = req.body;
        let dates = Date.now();
        const organizations = await Organization.find({name: organization});
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
            });
        } else {
            await organizations[0].vacantion.push(newVacantions);
            await organizations[0].save();
        }
        res.status(201).json({newVacantions});
    });

export default router;

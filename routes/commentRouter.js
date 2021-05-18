import express from 'express'
import Comment from '../models/comment.js'
import Organization from '../models/organization.js'
import Vacantion from '../models/vacantion.js'


const router = express.Router()

router
    .get('/', async (req, res) => {
            try {
                const comments = await Comment.find()
                return res.json(comments)
            } catch (e) {
                res.send({message: "Server error"})
            }
        })

export default router
Comment

import express from 'express'
import mongoose from 'mongoose'
import logger from 'morgan'
import createError from 'http-errors'
import authRouter from './routes/auth.js'
import vacansionRouter from './routes/vacansion.js'

const app = express()

mongoose.connect('mongodb://localhost:27017/auth', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(logger('dev'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', authRouter);
app.use('/vacansion', vacansionRouter);
app.use(function (req, res, next) {
    next(createError(404));
});


export default app

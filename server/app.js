import express from 'express'
import mongoose from 'mongoose'
import logger from 'morgan'
import createError from 'http-errors'
import authRouter from './routes/authRouter.js'
import orgRouter from './routes/organization.js'
import adminRouter from './routes/adminRouter.js'
const app = express()

mongoose.connect(
  // 'mongodb://localhost:27017/elbrus',
  `mongodb+srv://Alex:tB9hbppbaKG_vJr@cluster0.5agzc.mongodb.net/elbrus?retryWrites=true&w=majority`

, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(logger('dev'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', authRouter);
app.use('/organizations', orgRouter);
app.use('/',adminRouter)
app.use(function (req, res, next) {
    next(createError(404));
});


export default app

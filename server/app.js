import express from 'express'
import mongoose from 'mongoose'
import logger from 'morgan'
import createError from 'http-errors'
import cors from 'cors'
import studentRouter from './routes/studentRouter.js'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import authRouter from './routes/authRouter.js'
import orgRouter from './routes/organizationRouter.js'
import adminRouter from './routes/adminRouter.js'
import vacantionRouter from './routes/vacantionRouter.js'
import commentRouter from './routes/commentRouter.js'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log("__dirname",path.join(__dirname,  "public"));
mongoose.connect(
  // 'mongodb://localhost:27017/elbrus',
  `mongodb+srv://Alex:tB9hbppbaKG_vJr@cluster0.5agzc.mongodb.net/elbrus?retryWrites=true&w=majority`,
   {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});

app.use(cors())
app.use(logger('dev'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,  "public")));


app.use('/student',studentRouter)
app.use('/',authRouter)
app.use('/vacantion', vacantionRouter);
app.use('/organizations', orgRouter);
app.use('/student',studentRouter)
app.use('/',adminRouter)
app.use('/comment',commentRouter)
app.use(function (req, res, next) {
  // next(createError(404));
});



export default app

import express from 'express'
import mongoose from 'mongoose'
import logger from 'morgan'
import createError from 'http-errors'
import authRouter from './routes/auth.js'
import studentRouter from './routes/student.js'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log("__dirname",path.join(__dirname,  "public"));
mongoose.connect(
  // 'mongodb://localhost:27017/elbrus',
  `mongodb+srv://Alex:tB9hbppbaKG_vJr@cluster0.5agzc.mongodb.net/elbrus?retryWrites=true&w=majority`

, {useNewUrlParser: true, useUnifiedTopology: true});
app.use(logger('dev'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname,  "public")));
app.use('/', authRouter);
app.use('/student',studentRouter)
// app.use(function (req, res, next) {
//     next(createError(404));
// });


export default app

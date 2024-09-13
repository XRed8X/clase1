import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { test } from './backend/controllers/alumno.controller.js'

dotenv.config()


// Connect to MongoDB
mongoose.connect(process.env.url)
.then(() => {
        console.log('Connected to MongoDB')
})
.catch((err) => {
        console.log('Error connecting to MongoDB:', err)
})

const app = express()
app.use(cors())

app.listen(4000, ()=> {
    console.log('Server is running on port 4000')
})

test()
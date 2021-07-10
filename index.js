const express = require('express')
const app = express()
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const articleRoute = require('./api/routes/article')
const commentRoute = require('./api/routes/comment')

dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log("db connected")).catch(err=>console.log(err));

app.use("/api/article", articleRoute)

app.listen("5000", () => {
    console.log("Backend is running")
})
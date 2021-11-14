const express = require("express")
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const userSchema = require('./models/users')
dotenv.config();
app.use(express.json())

mongoose.connect("mongodb+srv://abrar_alzh:719719@cluster0.abt43.mongodb.net/VideoShring?retryWrites=true&w=majority").then(console.log("connected to mongodb"))
.catch((err) => console.log(err));




app.listen("5000 " , () =>{
    console.log("Backend is running");
});
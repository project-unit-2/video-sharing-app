const express = require("express")
const app = express();
const mongoose = require("mongoose")
// const dotenv = require("dotenv")
// const userSchema = require('./models/users');
const athRoute = require("./routes/ath");
// dotenv.config();
app.use(express.json())

mongoose.connect("mongodb+srv://abrar_alzh:719719@cluster0.abt43.mongodb.net/VideoShring?retryWrites=true&w=majority")
.then(console.log("connected to mongodb"))
.catch((err) => console.log(err));


app.use("/api/users", athRoute);




app.listen("5000 " , () =>{
    console.log("Backend is running");
});
const express = require("express")
const app = express();
const mongoose = require("mongoose")
app.use(express.json())
const postRoute = require("./routes/post")


mongoose.connect("mongodb+srv://abrar_alzh:719719@cluster0.abt43.mongodb.net/VideoShring?retryWrites=true&w=majority").then(console.log("connected to mongodb"))
.catch((err) => console.log(err));


app.use("/api/posts", postRoute)


app.listen("5000 " , () =>{
    console.log("Backend is running");
})
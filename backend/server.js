const express = require("express")
const app = express();
const mongoose = require("mongoose")
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user")
const postRoute = require("./routes/post")
app.use(express.json())
const multer = require("multer")


// MongooDB Connection
mongoose.connect("mongodb+srv://abrar_alzh:719719@cluster0.abt43.mongodb.net/VideoShring?retryWrites=true&w=majority")
.then(console.log("connected to mongodb"))
.catch((err) => console.log(err));



// Upload Files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, "images")
    },
    filename: (req, file, cb) => {
        cb (null, "hello.mp4")
    }
})

const upload = multer({storage: storage})
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("file hase been upload")
})



// Routes
app.use("/api/auth", authRoute);
app.use("/api/user" , userRoute);
app.use("/api/posts", postRoute)







app.listen(5000, () => console.log("Server up to running"))
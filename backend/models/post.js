const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    desc: {
        type:String,
        required:false
    },
    likes: {
        type:Number,
        required:false 
    },
    tags: {
        type: Array,
        required: false
    },
    views: {
        type: Number,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    type: {
        type: Array,
        required: false
    }
  
}, {timestamps:true}
);
var User = mongoose.model("Post", postSchema)

module.exports = User
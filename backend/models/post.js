const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    desc: {
        type: String,
        required:false
    },
    username: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
        required:false 
    },
    hashTags: {
        type: Array,
        required: false
    },
    categories: {
        type: Array,
        required: true
    }
  
}, {timestamps:true}
);
var User = mongoose.model("Post", postSchema)

module.exports = User
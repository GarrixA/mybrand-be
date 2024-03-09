const mongoose = require('mongoose');

const blogsSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
},
{
    timestamps: true
}
);

const Blogs = mongoose.model('Blogs', blogsSchema);
module.exports = {
    Blogs,
}
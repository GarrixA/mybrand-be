const mongoose = require("mongoose")
    
    const schema = mongoose.Schema({
        blogTitle: {
            type: String,
            required: true
        },
        blogDescription: {
            type: String,
            required: true
        }

    }, { timestamps: true })
    
    module.exports = mongoose.model("blog", schema);

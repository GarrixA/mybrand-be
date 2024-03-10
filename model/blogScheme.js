const mongoose = require("mongoose")
    
    const schema = mongoose.Schema({
       title:String,
        summary:String,
        description:String

    }, { timestamps: true })
    
    module.exports = mongoose.model("blog", schema);

const express = require('express');
const mongoose = require("mongoose");
const PORT = 3000;
const app = express();
const db_connect = 'mongodb://localhost:27017/my_brand_blogs';
const { router } = require('./routes/blogsRoutes');


mongoose
    .connect(db_connect)
    .then((res) =>{
        console.log('MongoDb connected successfully')
        app.use(express.json())
        app.use('/api', router)
        app.listen(PORT, () =>{
            console.log(`Express is running on http://localhost:${PORT}`)
        })
    })
    .catch((error) =>{
        console.log(error, 'Error connecting to mongDb')
    })

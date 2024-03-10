    const express = require("express")
    const mongoose = require("mongoose")
    const routes = require("./routes/routes") // new
    
    mongoose
        .connect("mongodb+srv://tuyisengetito3:h6uClMgz6FiBszui@cluster0.wk1xsou.mongodb.net/", { useNewUrlParser: true })
        .then(() => {
            const app = express()
            app.use(express.json()) // new
            app.use("/api", routes) // new
    
            app.listen(5000, () => {
                console.log("Server has started!")
            })
        })
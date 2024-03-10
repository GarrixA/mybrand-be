    const express = require("express")
    const Blog = require("../model/blogScheme") // new
    const router = express.Router()
    
    // Get all blog
    router.get("/blogs", async (req, res) => {
        const blogs = await Blog.find()
        res.send(blogs)
    })


    // create new blog
    router.post("/blogs/add", async (req, res) => {
        try {
        
            const blog = new Blog({
                title: req.body.title,
                summary: req.body.summary,
                description: req.body.description,
            })
            await blog.save()
            res.send(blog)
    
    
        } catch (error) {
          res.status(400).send(error.message);
        }
      });
    
      // get one blog

      router.get("/blogs/getOne/:id", async (req, res) => {
        try {
            const blog = await Blog.findOne({ _id: req.params.id })
            res.send(blog)
        } catch {
            res.status(404)
            res.send({ error: "blog doesn't exist!" })
        }
    })

    //update blog

    router.patch("/blog/update/:id", async (req, res) => {
        try {
            const blog = await Blog.findOne({ _id: req.params.id })
    
            if (req.body.title) {
                blog.title = req.body.title
            }
    
            if (req.body.summary) {
                blog.summary = req.body.summary
            }
           
            if (req.body.description) {
                blog.description = req.body.description
            }
            await blog.save()
            res.send(blog)
        } catch {
            res.status(404)
            res.send({ error: "blog doesn't exist!" })
        }
    })

    //delete blog 

    router.delete("/blogs/delete/:id", async (req, res) => {
        try {
            await Blog.deleteOne({ _id: req.params.id })
            res.status(204).send()
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
    

    module.exports = router
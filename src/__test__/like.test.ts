import request from "supertest";
import { mongoTestConnect, mongoTestDisconnect } from "../services/testConnections";
import app from "../app";
import userSchema from "../models/userSchema";
import blogSchema from "../models/blogSchema";
import Blog from '../models/blogSchema';

describe("My blogs API liks", ()=>{
  
    beforeAll(async()=>{
        await mongoTestConnect();
    });

    afterAll(async()=>{
        await userSchema.deleteMany();
        await blogSchema.deleteMany();
        await mongoTestDisconnect();
    })

    describe("Blog likes", ()=>{
        it("should return 200 and like added", async()=>{
            const blog = await new Blog()
            await blog.save();
            
            const {body} = await request(app)
                .post(`/api/v1/${blog._id}/likes`)
                .expect(200)
        })
    })
})
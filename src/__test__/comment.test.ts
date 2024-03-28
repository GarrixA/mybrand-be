import request from 'supertest';
import { mongoTestConnect, mongoTestDisconnect } from '../services/testConnections';
import app from '../app';
import userSchema from '../models/userSchema';
import blogSchema from '../models/blogSchema';
import Blog from '../models/blogSchema';
import mongoose from 'mongoose';
import { blogData, loginAdminData, signupAdminData } from '../mock/static';

jest.setTimeout(10000)
let token: string;
let id: mongoose.Types.ObjectId;
describe('My Blogs API', ()=>{
    beforeAll(async()=>{
        await mongoTestConnect();
    });

    afterAll(async()=>{
        await userSchema.deleteMany();
        await blogSchema.deleteMany();
        await mongoTestDisconnect();
    });

    describe('Welcome to Blogs API Comments', ()=>{
        it('should return 200 and welcome mesage', async()=>{
            const {body} = await request(app)
                .get('/api/v1')
                .expect(200)
        });

        it('should sign up and login ', async()=>{ 
            const {body} = await request(app)
            .post("/api/v1/users/register")
            .send(signupAdminData)
            .expect("Content-Type", /json/)
            .expect(201); 
    
          const loginResponse = await request(app)
            .post('/api/v1/users/login')
            .send(loginAdminData)
            .expect(200)
            token = loginResponse.body.token
        })

        it("Should return 201 and comment created", async()=>{
            const newBlog = new Blog(blogData)
            await newBlog.save();
            id = newBlog._id
            const commentData = {
                content: "I like how you did it"
            }

            const body = await request(app)
                .post(`/api/v1/blogs/${id}/comments`)
                .send(commentData)
                .set("Authorization", `Bearer ${token}`)
                .expect(201)
        })
    })
})
import request from "supertest";
import {
  mongoTestConnect,
  mongoTestDisconnect,
} from "../services/testConnections";
import app from "../app";
import { blogData, loginAdminData, signupAdminData, updateBlogData } from "../mock/static";
import userSchema from "../models/userSchema";
import Blog from '../models/blogSchema';
import mongoose from "mongoose";
import blogSchema from "../models/blogSchema";

let token: string
jest.setTimeout(10000);
let id: mongoose.Types.ObjectId;
id = new mongoose.Types.ObjectId();
describe("My Blog API", () => {
  beforeAll(async () => {
    await mongoTestConnect();
  });

  afterAll(async () => {
    await userSchema.deleteMany();
    await blogSchema.deleteMany();
    await mongoTestDisconnect();
  });

  describe("Welcome to my blogs API", () => {
    it("it should return 200 status and welcome message", async () => {
      const {body} = await request(app)
        .get("/api/v1")
        .expect(200)
        .expect("Content-type", /json/);
      expect(body.message).toStrictEqual('Welcome to the my blogs API')
    });

    it('it should return 200 and list of blogs', async()=>{
      const {body} = await request(app)
        .get('/api/v1/blogs')
        .expect(200);
      expect(body.message).toStrictEqual('Success');
      expect(body.data).toBeDefined();
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


    it("should return 201 and blog created", async()=>{
      const {body} = await request(app)
        .post('/api/v1/blogs')
        .set("Authorization", `Bearer ${token}`)
        .field("title", blogData.title)
        .field("description", blogData.description)
        .attach("image", blogData.image)
        .expect(201)
    })

    it("Should return 200 and updated blog", async()=>{
      const updatedBlog = await new Blog(blogData)
      await updatedBlog.save()
      const {body} = await request(app)
        .patch(`/api/v1/blogs/${updatedBlog._id}`)
        .set("Authorization", `Bearer ${token}`)
        .send(updateBlogData)
        .expect(200)
    })
  });
});

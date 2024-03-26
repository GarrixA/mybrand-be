import request from "supertest";
import {
  mongoTestConnect,
  mongoTestDisconnect,
} from "../services/testConnections";
import app from "../app";
import { addQuery, loginAdminData, signupAdminData } from "../mock/static";
import userSchema from "../models/userSchema";
import Query from '../models/querySchema';
import mongoose from "mongoose";

let token: string;
jest.setTimeout(10000);
let id: mongoose.Types.ObjectId;
id = new mongoose.Types.ObjectId(); 
console.log(id)
describe("My Blogs API", () => {
  beforeAll(async () => {
    await mongoTestConnect();
  });

  afterAll(async () => {
    await userSchema.deleteMany();
    await mongoTestDisconnect();
  });

  describe("Welcome to my blogs API", () => {
    it("should return 200 and welcome message", async () => {
      const { body } = await request(app).get("/api/v1").expect(200);
    });

    it("should sign up and login", async () => {
      const response = await request(app)
        .post("/api/v1/users/register")
        .send(signupAdminData)
        .expect("Content-Type", /json/)
        .expect(201);

      const loginResponse = await request(app)
        .post("/api/v1/users/login")
        .send(loginAdminData)
        .expect(200);
      expect(loginResponse.body.token).toBeDefined();
      token = loginResponse.body.token;
    });

    it("Should return 200 and list of queries", async () => {
      const { body } = await request(app)
        .get("/api/v1/queries")
        .set("Authorization", `Bearer ${token}`)
        .expect(200);
    });

    it("It should return 200 and single query", async () => {
      const query = new Query(addQuery)
      await query.save()
      const { body } = await request(app)
        .get(`/api/v1/queries/${query._id}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(200);
    });

    it("Should return 200 and created query", async () => {
      const { body } = await request(app)
        .post("/api/v1/queries")
        .send(addQuery)
        .expect(201);

      expect(body.message).toStrictEqual("Message created");
    });
  });
});

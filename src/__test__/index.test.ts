import request from "supertest";
import {
  mongoTestConnect,
  mongoTestDisconnect,
} from "../services/testConnections";
import app from "../app";

describe("My Blog API", () => {
  beforeAll(async () => {
    await mongoTestConnect();
  });

  afterAll(async () => {
    await mongoTestDisconnect();
  });

  describe('Welcome to my blogs API', ()=>{
    it("it should return 200 status and welcome message", async () => {
        const response = await request(app)
          .get("/api/v1")
          .expect(200)
          .expect("Content-type", /json/);
      });
  })

  
});

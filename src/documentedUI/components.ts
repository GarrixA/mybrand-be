import { Schema } from "mongoose";

export default {
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "apiKey",
          scheme: "auth",
          authFormat: "JWT",
          name: "Authorization",
          in: "header",
        },
      },
  
      schemas: {
        Users: {
          type: "object",
          properties: {
            names: {
              type: "string",
              description: "full names",
              example: "John",
            },
            email: {
              type: "string",
              description: "Email address",
              example: "test@gmail.com",
            },
            password: {
              type: "string",
              description: "Password",
              example: "12345678",
            },
            role: {
              type: "string",
              description: "Role",
              example: "buyer",
            }
          },
        },
        Blog:{
          type: "object",
          properties:{
            title:{
              type:'string',
              description: "The arsenal fans",
              example:'Arsenal fans are rolling in the streets',
            },
            description:{
              type:'string',
              description:"provide the description for the blog"
            },
            coverImage:{
              type:'string',
              description:"Provide the blog image"
            },
          },
        },
        Comments:{
          type: "object",
          properties:{
            blogId:{
              type:'string',
              description: "provide the blog id",
            },
            commentMessage:{
              type:'string',
              description:"Provide the comment"
            },
            username:{
              type:'string',
              description:"Input the name of commenter"
            },
          },
        },
        Like:{
          type: "object",
          properties:{
            blogId:{
              type:'string',
              description: "pass the blog Id",
            },
            userId:{
              type:'string',
              description:"enter the message"
            },
            isLiked:{
              type:'boolean',
              description:"Provide a name of commenting person"
            },
          },
        },

        Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Error message",
              example: "Not found",
            },
            internal_code: {
              type: "string",
              description: "Error internal code",
              example: "Invalid parameters",
            },
          },
        },
      },
    },
  };


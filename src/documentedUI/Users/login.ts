export default {
  post: {
    tags: ["Auth"],
    description: "Login user",
    operationId: "loginUser",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              username: {
                type: "string",
                example: "gashugi12",
                description: "Enter your username",
              },
              password: {
                type: "string",
                example: "P@ssword12",
                description: "Enter your password",
              },
            },
            required: ["username", "password"],
          },
        },
      },
    },
    responses: {
      "200": {
        description: "User was logged in",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Users",
            },
          },
        },
      },
      "400": {
        description: "Bad Request",
        content: {
          "application/json": {
            example: {
              status: false,
              message: "Please fill all required fields",
            },
          },
        },
      },
      "500": {
        description: "Internal Server Error",
        content: {
          "application/json": {
            example: {
              status: false,
              message: "An error occurred while adding the user",
            },
          },
        },
      },
    },
  },
};

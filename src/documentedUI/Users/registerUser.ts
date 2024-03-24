export default {
    post: {
        tags: ["Auth"],
        description: "Sign up a user",
        operationId: "signup",
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            username: { type: "string", example: "gakunzi11" },
                            email: { type: "string", format: "email" },
                            password: { type: "string", minLength: 4 },
                        },
                        required: ["username", "email", "password"], 
                    },
                },
            },
        },
        
        responses: {
            "201": {
                description: "User added successfully",
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
                            message: "An error occurred while signing up the user",
                        },
                    },
                },
            },
        },
    },
    
};
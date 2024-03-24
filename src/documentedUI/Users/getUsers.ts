export default {
    get:{
        tags: ["Users"],
        description: "Get all users",
        operationId: "getAllUsers",
        security:[
            {
                BearerAuth:[]
            }
        ],
        responses: {
            "200": {
                description: "All users retrieved",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Users",
                        },
                    },
                },
            },
            "404": {
                description: "Users were not found",
            },
        },
    },
    }
export default {
    get:{
        tags: ["Users"],
        description: "Get all users",
        operationId: "getAllUsers",
        security:[
            {
                APIKeyAuth:[]
            }
        ],
        responses: {
            "200": {
                description: "List of All users",
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
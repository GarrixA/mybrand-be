export default {
    delete:{
        tags: ["Users"],
        description: "Delete a user",
        operationId: "deleteUser",
        security: [
            {
              Auth: [],
            },
          ],
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    type: "string",
                },
                required: true,
            },
        ],
        responses: {
            "200": {
                description: "User deleted",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Users",
                        },
                    },
                },
            },
            "404": {
                description: "User was not found",
            },
        },

    },
    }
export default {
    delete:{
        tags: ["Users"],
        description: "Delete user",
        operationId: "deleteUser",
        security: [
            {
              BearerAuth: [],
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
                description: "No content",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Users",
                        },
                    },
                },
            },
            "204": {
                description: "User deeleted Successfully",
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
    }
}

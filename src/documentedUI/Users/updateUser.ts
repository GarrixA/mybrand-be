export default {
    patch: {
        tags:["Users"],
        description:"Update user using ID",
        operationId:"updateUser",
        security:[
            {
                Auth:[]
            }
        ],
        parameters:[
            {
            name:"userId",
            in:"path",
            schema:{
                type:"string"
            },
            required:true
            }
        ],
        requestBody:{
            content :{
                "application/json": {
                    schema:{
                        type:"object",
                        properties:{
                            username:{type:"string", example:"gakunzi12"},
                            email:{type:"string", example:"gakunzi@gmail.com"},
                        },
                        required:["username", "email"]
                    },
                },
            },
        },
        responses:{
            "200":{
                description:"User was updated",
                content:{
                    "application/json":{
                        schema:{
                            $ref:"#components/schemas/Users"
                        }
                    }
                }
            },
            "400":{
                description:"Bad Request",
                content:{
                    "application/json":{
                        example:{
                            status:false,
                            message:"Please fill all required fields"
                        }
                    }
                }
            },
            "401":{
                description:"Unauthorized",
                content:{
                    "application/json":{
                        example:{
                            status:false,
                            message:"Unauthorized"
                        }
                    }
                }
            }
        }
    }
}
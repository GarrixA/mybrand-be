export default {
    get:{
        tags:['Users'],
        description:'Get Single user using ID',
        operationId:'getSingleUser',
        security:[
            {
                BearerAuth:[]
            }
        ],
        parameters:[
            {
                name:'id',
                in:'path',
                schema:{
                    type:'string',
                },
                required:true,
            },
        ],
        responses:{
            '200':{
                description:'Get Single User',
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Users',
                        },
                    },
                },
            },
            '404':{
                description:'User not found',
            },
        },
    },
    }
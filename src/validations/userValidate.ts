import Joi from "joi";

const userSchema = Joi.object({
    username: Joi.string().regex(/^[a-z]+(?:\d+)?$/).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:'",.<>/?])[a-zA-Z0-9!@#$%^&*()\-_=+\\\|\[\]{};:'",.<>/?\s]{4,15}$/).required(),
    role: Joi.string()
});

const loginValidation = Joi.object({
    username: Joi.string().regex(/^[a-z]+(?:\d+)?$/).required(),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:'",.<>/?])[a-zA-Z0-9!@#$%^&*()\-_=+\\\|\[\]{};:'",.<>/?\s]{4,15}$/).required(),
})

const validateRegisterUser = (user: any) => {
    return userSchema.validate(user);
}

const validateLoginUser = (user: any) =>{
    return loginValidation.validate(user);
}

export default {
    validateRegisterUser,
    validateLoginUser
};

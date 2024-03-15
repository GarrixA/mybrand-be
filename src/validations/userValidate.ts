import Joi from "joi";

const userSchema = Joi.object({
    username: Joi.string().regex(/^[a-z]+(?:\d+)?$/).required(),
    email: Joi.string().email(),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:'",.<>/?])[a-zA-Z0-9!@#$%^&*()\-_=+\\\|\[\]{};:'",.<>/?\s]{4,15}$/).required(),
    role: Joi.string()
});

const validateUser = (user: any) => {
    return userSchema.validate(user);
}

export default validateUser;

import Joi from "joi";

const querySchema = Joi.object({
    name: Joi.string().required(),
    message: Joi.string().min(5).max(150).required()
});

const validateQuery = (query: any)=>{
    return querySchema.validate(query);
}

export default validateQuery;
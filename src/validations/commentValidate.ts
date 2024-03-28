import Joi from "joi";

const commentSchema = Joi.object({
    content: Joi.string().required(),
    name: Joi.string()
});

const validateComment = (commentData: any) =>{
    return commentSchema.validate(commentData);
}



export default validateComment;
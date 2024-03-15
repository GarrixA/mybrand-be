import Joi from "joi";

const commentSchema = Joi.object({
    content: Joi.string().required()
});

const validateComment = (commentData: any) =>{
    return commentSchema.validate(commentData);
}



export default validateComment;
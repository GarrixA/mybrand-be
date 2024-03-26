import Joi from 'joi';

const blogSchema = Joi.object({
  title: Joi.string().min(2).required(),
  description: Joi.string().min(5).required(),
  image: Joi.string()
});

const validateBlog = (blogData: any) => {
  return blogSchema.validate(blogData);
};

export default validateBlog;
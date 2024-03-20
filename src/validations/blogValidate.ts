import Joi from 'joi';

const blogSchema = Joi.object({
  title: Joi.string().min(10).required(),
  description: Joi.string().min(10).required(),
  // image: Joi.string().required(),
});

const validateBlog = (blogData: any) => {
  return blogSchema.validate(blogData);
};

export default validateBlog;
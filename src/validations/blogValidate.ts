import Joi from 'joi';

const blogSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

const validateBlog = (blogData: any) => {
  return blogSchema.validate(blogData);
};

export default validateBlog;
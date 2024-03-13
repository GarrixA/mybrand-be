const Joi = require('joi');

const blogSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

const validateBlog = (blogData) => {
  return blogSchema.validate(blogData);
};

module.exports = validateBlog;
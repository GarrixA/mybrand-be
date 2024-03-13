const mongoose = require('mongoose');

const schema = mongoose.Schema;

const BlogSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', BlogSchema);
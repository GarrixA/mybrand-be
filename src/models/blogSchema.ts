import mongoose from 'mongoose';

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
    likes: {
      type: Number,
      default: 0,
    },
    comments: [{type: {}}],
  },
  { timestamps: true }
);


export default mongoose.model('Blog', BlogSchema);
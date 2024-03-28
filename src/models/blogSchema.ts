import mongoose from 'mongoose';

const schema = mongoose.Schema;

const BlogSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      required: true,
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Likes"}],
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comments"}],
  },
  { timestamps: true }
);


export default mongoose.model('Blogs', BlogSchema);
import mongoose from 'mongoose';

const schema = mongoose.Schema;

const CommentSchema = new schema(
  {
    username: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    blogId: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Blog',
    }
  },
  { timestamps: true }
);

export default mongoose.model('Comments', CommentSchema);

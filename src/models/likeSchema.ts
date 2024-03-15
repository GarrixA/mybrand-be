import mongoose from "mongoose";

const schema = mongoose.Schema;

const LikeSchema = new schema({
  like: {
    type: String,
  },
});

export default mongoose.model("Like", LikeSchema);

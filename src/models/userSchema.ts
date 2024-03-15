import mongoose from "mongoose";

const schema = mongoose.Schema;
const userSchema = new schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
  },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
    status: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Users", userSchema);

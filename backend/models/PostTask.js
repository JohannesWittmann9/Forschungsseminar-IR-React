import mongoose from "mongoose";

const PostTaskSchema = mongoose.Schema(
  {
    user_id: String,
    session_id: String,
    task_id: String,
    results: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const PostTask = mongoose.model("PostTask", PostTaskSchema);

export default PostTask;

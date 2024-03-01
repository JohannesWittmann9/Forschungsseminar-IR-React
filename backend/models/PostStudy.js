import mongoose from "mongoose";

const PostStudySchema = new mongoose.Schema(
  {
    user_id: String,
    results: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const PostStudy = mongoose.model("PostStudy", PostStudySchema);

export default PostStudy;

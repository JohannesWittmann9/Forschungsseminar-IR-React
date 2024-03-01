import mongoose from "mongoose";

const PreStudySchema = new mongoose.Schema(
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

const PreStudy = mongoose.model("PreStudy", PreStudySchema);

export default PreStudy;

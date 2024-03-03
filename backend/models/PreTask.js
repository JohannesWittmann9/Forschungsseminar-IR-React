import mongoose from "mongoose";

const PreTaskSchema = new mongoose.Schema(
  {
    user_id: String,
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

const PreTask = mongoose.model("PreTask", PreTaskSchema);

export default PreTask;

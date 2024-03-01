import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
  {
    session_id: {
      type: String,
      unique: true,
      required: true
    },
    user_id: String,
    task_id: String,
    session_start_time: Date,
    session_end_time: Date
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model("Session", SessionSchema);

export default Session;

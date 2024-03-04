import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
  {
    session_id: String,
    user_id: String,
    task_id: String,
    session_start_time: Date,
    session_end_time: Date
  }
);

const Session = mongoose.model("Session", SessionSchema);

export default Session;

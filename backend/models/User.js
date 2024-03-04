import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      unique: true,
      required: true
    },
    study_start_time: Date,
    study_end_time: Date,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;

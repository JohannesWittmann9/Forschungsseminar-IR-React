import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      unique: true,
      required: true
    },
    study_start_time: {
      type: Date,
      default: Date.now,
    },
    study_end_time: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;

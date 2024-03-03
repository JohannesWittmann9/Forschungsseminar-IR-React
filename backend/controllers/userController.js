import User from "../models/User.js";

// add user
export const addUser = async (req, res) => {
  try {
    const { user_id, study_start_time, study_end_time } = req.body;

    const user = await User.create({ user_id, study_start_time, study_end_time });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

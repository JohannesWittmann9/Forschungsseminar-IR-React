import Session from "../models/Session.js";

export const addSession = async (req, res) => {
  try {
    const {
      session_id,
      user_id,
      task_id,
      session_start_time,
      session_end_time,
    } = req.body;

    const session = await Session.create({
      session_id,
      user_id,
      task_id,
      session_start_time,
      session_end_time,
    });
    res.status(200).json(session);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

import PostTask from "../models/PostTask.js";

export const addPostTask = async (req, res) => {
  try {
    const { user_id, session_id, task_id, results } = req.body;
    const postTask = await PostTask.create({
      user_id,
      session_id,
      task_id,
      results,
    });
    res.status(200).json(postTask);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

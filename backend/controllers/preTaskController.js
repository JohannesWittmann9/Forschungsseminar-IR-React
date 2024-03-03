import PreTask from "../models/PreTask.js";

export const addPreTask = async (req, res) => {
  try {
    const { user_id, task_id, results } = req.body;
    const preTask = await PreTask.create({
      user_id,
      task_id,
      results,
    });
    res.status(200).json(preTask);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

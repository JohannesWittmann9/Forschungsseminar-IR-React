import PreStudy from "../models/PreStudy.js";

export const addPreStudy = async (req, res) => {
  try {
    const { user_id, results } = req.body;
    // const user_id = req.user._id;
    const preStudy = await PreStudy.create({
      user_id,
      results,
    });
    res.status(200).json(preStudy);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

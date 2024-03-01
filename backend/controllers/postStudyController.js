import PostStudy from "../models/PostStudy.js"

export const addPostStudy = async (req, res) => {
  try {
    const { user_id, results } = req.body;
    // const user_id = req.user._id;
    const postStudy = await PostStudy.create({
      user_id,
      results,
    });
    res.status(200).json(postStudy);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

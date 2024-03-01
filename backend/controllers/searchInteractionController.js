import SearchInteraction from "../models/SearchInteraction.js";


export const addSearchInteraction = async (req, res) => {
  try {
    const { interaction_id, user_id, session_id, query, number_of_retrieved_docs } =
      req.body;
    const searchInteraction = await SearchInteraction.create({
      interaction_id,
      user_id,
      session_id,
      query,
      number_of_retrieved_docs,
    });
    res.status(200).json(searchInteraction);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

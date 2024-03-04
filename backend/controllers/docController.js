import Document from "../models/Document.js";

export const addDocument = async (req, res) => {
  try {
    const {
      doc_id,
      interaction_id,
      doc_title,
      doc_position,
      doc_page_viewed,
      // time_spent
    } = req.body;
    const document = await Document.create({
      doc_id,
      interaction_id,
      doc_title,
      doc_position,
      doc_page_viewed,
      // time_spent
    });
    res.status(200).json(document);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

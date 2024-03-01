import Document from "../models/Document.js";

export const addDocument = async (req, res) => {
  try {
    const {
      interaction_id,
      doc_title,
      doc_position,
      doc_page_viewed,
      time_tab_opened,
      time_tab_closed,
    } = req.body;
    const document = await Document.create({
      interaction_id,
      doc_title,
      doc_position,
      doc_page_viewed,
      time_tab_opened,
      time_tab_closed,
    });
    res.status(200).json(document);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

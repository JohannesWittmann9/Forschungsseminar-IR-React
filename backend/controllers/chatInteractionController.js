import ChatInteraction from "../models/ChatInteraction.js"

export const addChatInteraction = async (req, res) => {
    try {
      const { interaction_id, user_id, session_id, dialogues } = req.body;
      const chatInteraction = await ChatInteraction.create({
        interaction_id,
        user_id,
        session_id,
        dialogues,
      });
      res.status(200).json(chatInteraction);
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
  };
  
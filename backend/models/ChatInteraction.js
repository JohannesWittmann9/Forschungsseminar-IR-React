import mongoose from "mongoose";

const ChatInteractionSchema = new mongoose.Schema(
  {
    interaction_id: String,
    user_id: String,
    session_id: String,
    interaction_type: String,
    dialogues: {
      type: Array,
      default: [
        {
          question: String,
          answer: String,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const ChatInteraction = mongoose.model("ChatInteraction", ChatInteractionSchema);

export default ChatInteraction;

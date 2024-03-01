import mongoose from "mongoose";

const ChatInteractionSchema = new mongoose.Schema(
  {
    interaction_id: String,
    user_id: String,
    session_id: mongoose.Types.ObjectId,
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

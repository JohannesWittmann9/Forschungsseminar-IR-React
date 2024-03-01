import mongoose from "mongoose";

const SearchInteractionSchema = new mongoose.Schema(
  {
    interaction_id: String,
    user_id: String,
    session_id: mongoose.Types.ObjectId,
    query: String,
    number_of_retrieved_docs: Number,
  },
  {
    timestamps: true,
  }
);

const SearchInteraction = mongoose.model("SearchInteraction", SearchInteractionSchema);

export default SearchInteraction;

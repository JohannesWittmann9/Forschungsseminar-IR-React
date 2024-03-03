import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema(
  {
    doc_id: String,
    interaction_id: String,
    doc_title: String,
    doc_position: Number,
    doc_page_viewed: Number,
    time_spent: Date
  },
  {
    timestamps: true,
  }
);

const Document = mongoose.model("Document", DocumentSchema);

export default Document;

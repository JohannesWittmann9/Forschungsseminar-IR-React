import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema(
  {
    interaction_id: String,
    doc_title: String,
    doc_position: Number,
    doc_page_viewed: Number,
    time_tab_opened: {
      type: Date,
      default: Date.now,
    },
    time_tab_closed: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Document = mongoose.model("Document", DocumentSchema);

export default Document;

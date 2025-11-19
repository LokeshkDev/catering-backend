import mongoose from "mongoose";

const quotationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  contents: { type: [String], required: true }, // array of HTML pages
  updated: { type: Date, default: Date.now }
});

export const Quotation = mongoose.model("Quotation", quotationSchema);

import express from "express";
import { Quotation } from "../models/Quotation.js";

const router = express.Router();

// GET ALL quotations (returns name, updated, contents)
router.get("/", async (req, res) => {
  const data = await Quotation.find().sort({ updated: -1 }).select("name updated contents");
  res.json(data);
});

// GET single quotation by name
router.get("/:name", async (req, res) => {
  const item = await Quotation.findOne({ name: req.params.name }).select("name updated contents");
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

// CREATE or UPDATE quotation (NO PDF stored)
router.post("/", async (req, res) => {
  const { name, contents } = req.body;
  if (!name || !Array.isArray(contents)) {
    return res.status(400).json({ success: false, message: "Invalid payload" });
  }

  let item = await Quotation.findOne({ name });

  if (item) {
    // update
    item.contents = contents;
    item.updated = new Date();
    await item.save();
  } else {
    // create
    item = await Quotation.create({
      name,
      contents,
      updated: new Date(),
    });
  }

  res.json({ success: true, data: item });
});

// DELETE quotation
router.delete("/:name", async (req, res) => {
  await Quotation.deleteOne({ name: req.params.name });
  res.json({ success: true, message: "Deleted successfully" });
});

export default router;

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import quotationRoutes from "./routes/quotationRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" })); // allow base64 PDFs

// DB Connect
connectDB();

// Routes
app.use("/api/quotations", quotationRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Catering Backend API Running...");
});

// ----------------------------
// IMPORTANT: Railway/Render FIX
// ----------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

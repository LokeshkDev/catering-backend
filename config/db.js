import mongoose from "mongoose";
import dotenv from "dotenv";

// Load .env only in local development
dotenv.config();

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      console.error("❌ ERROR: MONGODB_URI is missing.");
      console.error("➡ Add it in Render → Environment Variables.");
      process.exit(1);
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("🍃 MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

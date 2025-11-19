import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lokesh-varahi-dbuser:varahi324@varahi-quotation-pdfs.gnukec5.mongodb.net/?appName=varahi-quotation-pdfs",  // CHANGE IF USING ATLAS
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("🍃 MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB Error:", err);
    process.exit(1);
  }
};

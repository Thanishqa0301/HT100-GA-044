import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import storyRoutes from "./routes/storyRoutes.js";
import audioRoutes from "./routes/audioRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/story", storyRoutes);
app.use("/api/audio", audioRoutes);

// Static folder for images
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 SnapWeave Backend Running on Port ${PORT}`);
});
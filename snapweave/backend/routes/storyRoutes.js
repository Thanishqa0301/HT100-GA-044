import express from "express";
import multer from "multer";
import { generateStory } from "../controllers/storyController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/generate", upload.array("images", 4), generateStory);

export default router;
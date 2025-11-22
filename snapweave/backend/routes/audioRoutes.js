import express from "express";
import { generateAudio } from "../controllers/audioController.js";

const router = express.Router();

router.post("/tts", generateAudio);

export default router;
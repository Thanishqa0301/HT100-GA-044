// src/utils/api.js
import axios from "axios";

const BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

const client = axios.create({
  baseURL: BASE,
  timeout: 120000,
});

// Upload images + prompt to generate story
// form: { images: File[], prompt: string, emotion, place, characters, storyStyle, custom }
async function generateStoryFromFiles({ images = [], prompt = "", meta = {} }) {
  const fd = new FormData();
  // append images (multer expects same field name 'images' used by backend)
  images.forEach((file) => fd.append("images", file));
  // other fields as text
  fd.append("prompt", prompt ?? "");
  // append meta fields if any
  Object.entries(meta).forEach(([k, v]) => {
    if (v !== undefined && v !== null) fd.append(k, v);
  });

  const res = await client.post("/api/story/generate", fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data; // { story: "...", images: [ base64 or url ... ] }
}

// Request TTS audio for a story text
async function generateAudio(text, options = {}) {
  const res = await client.post("/api/audio/tts", { text, ...options });
  return res.data; // { audioUrl: "/uploads/xxx.mp3" }
}

export default {
  generateStoryFromFiles,
  generateAudio,
};
// src/App.jsx
import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DragDrop from "./components/DragDrop";
import PromptBox from "./components/PromptBox";
import ResultStoryCard from "./components/ResultStoryCard";
import LoadingIndicator from "./components/LoadingIndicator";
import AudioReader from "./components/AudioReader";
import api from "./utils/api";

const LOGO_PATH = '/mnt/data/A_logo_design_for_"SNAPWEAVE"_features_a_stylized_.png';

export default function App() {
  const [files, setFiles] = useState([]); // File objects
  const [promptMeta, setPromptMeta] = useState({ prompt: "", emotion: "", place: "", characters: "", storyStyle: "", custom: "" });
  const [generating, setGenerating] = useState(false);
  const [story, setStory] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]); // array of base64 or urls
  const [audioUrl, setAudioUrl] = useState(null);

  // Called by DragDrop (it passes File[] or fileList)
  function handleImagesSelected(fileArray) {
    // ensure array of File objects
    setFiles((prev) => [...prev, ...fileArray]);
  }

  // Called by PromptBox on submit
  function handlePromptSubmit(data) {
    // data contains emotion, place, characters, custom, storyStyle
    setPromptMeta({
      prompt: data.custom || "", // if you want separate 'prompt' vs fields, modify
      emotion: data.emotion,
      place: data.place,
      characters: data.characters,
      storyStyle: data.storyStyle,
      custom: data.custom,
    });

    // You can auto-trigger generate here, or wait for user click. We'll not auto-trigger.
  }

  // Main generate function — send files + prompt/meta to backend
  async function handleGenerate() {
    if (files.length === 0 && !promptMeta.prompt && !promptMeta.custom) {
      alert("Please upload images or type some prompt first.");
      return;
    }

    try {
      setGenerating(true);
      setStory("");
      setGeneratedImages([]);
      setAudioUrl(null);

      const payload = {
        images: files,
        prompt: promptMeta.custom || promptMeta.prompt || "",
        meta: {
          emotion: promptMeta.emotion,
          place: promptMeta.place,
          characters: promptMeta.characters,
          storyStyle: promptMeta.storyStyle,
        },
      };

      const data = await api.generateStoryFromFiles(payload);
      // expected backend to return: { story: "...", images: [ base64 or url ... ] }
      setStory(data.story || "");
      setGeneratedImages(data.images || []);

    } catch (err) {
      console.error("Generate error:", err);
      alert("Story generation failed. Check backend logs.");
    } finally {
      setGenerating(false);
    }
  }

  // Request TTS for current story
  async function handleGenerateAudio() {
    if (!story) {
      alert("Generate story first");
      return;
    }
    try {
      const res = await api.generateAudio(story);
      // res.audioUrl should be a full or relative URL (e.g. /uploads/story-123.mp3)
      // If relative, prefix BASE in frontend or allow server to return absolute
      setAudioUrl(res.audioUrl);
    } catch (err) {
      console.error("Audio error:", err);
      alert("Audio generation failed.");
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f3eb] relative">
      <Navbar logoUrl={LOGO_PATH} />

      <HeroSection />

      <div id="upload-section" className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <DragDrop onImagesSelected={(fileArray) => handleImagesSelected(fileArray)} />

          <PromptBox onPromptSubmit={handlePromptSubmit} />

          <div className="flex gap-4 items-center mt-6">
            <button
              onClick={handleGenerate}
              className="px-6 py-3 bg-orange-600 text-white rounded-2xl font-bold shadow"
              disabled={generating}
            >
              {generating ? "Generating..." : "Generate Story"}
            </button>

            <button
              onClick={handleGenerateAudio}
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl"
              disabled={!story}
            >
              Generate Audio (TTS)
            </button>
          </div>

          {generating && <LoadingIndicator />}

          {/* show result */}
          {!generating && (story || generatedImages.length > 0) && (
            <ResultStoryCard story={story} images={generatedImages} />
          )}

          {/* audio player */}
          {!generating && audioUrl && (
            <div className="mt-6">
              <AudioReader audioUrl={audioUrl} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
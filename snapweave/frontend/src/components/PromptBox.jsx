import React, { useState } from "react";

export default function PromptBox({ onPromptSubmit }) {
  const [emotion, setEmotion] = useState("");
  const [place, setPlace] = useState("");
  const [characters, setCharacters] = useState("");
  const [custom, setCustom] = useState("");
  const [storyStyle, setStoryStyle] = useState("emotional");

  const handleSubmit = () => {
    const promptData = {
      emotion,
      place,
      characters,
      custom,
      storyStyle,
    };

    if (onPromptSubmit) {
      onPromptSubmit(promptData);
    }
  };

  return (
    <div className="w-full max-w-3xl mt-16 bg-white p-10 rounded-3xl shadow-xl">

      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
        Story Preferences
      </h2>

      {/* Emotion */}
      <div className="mb-5">
        <label className="font-semibold text-gray-700">Emotion</label>
        <input
          type="text"
          placeholder="eg: happy, nostalgic, romantic…"
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
        />
      </div>

      {/* Place */}
      <div className="mb-5">
        <label className="font-semibold text-gray-700">Place / Location</label>
        <input
          type="text"
          placeholder="eg: beach, mountain, school, home…"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
        />
      </div>

      {/* Characters */}
      <div className="mb-5">
        <label className="font-semibold text-gray-700">Characters / People</label>
        <input
          type="text"
          placeholder="eg: Me, Meghana, friends, family…"
          value={characters}
          onChange={(e) => setCharacters(e.target.value)}
          className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
        />
      </div>

      {/* Story Style */}
      <div className="mb-5">
        <label className="font-semibold text-gray-700">Story Style</label>
        <select
          value={storyStyle}
          onChange={(e) => setStoryStyle(e.target.value)}
          className="w-full p-4 mt-2 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-orange-400 outline-none"
        >
          <option value="romantic">Romantic</option>
          <option value="thriller">Thriller</option>
          <option value="adventure">Adventure</option>
          <option value="funny">Funny</option>
          <option value="emotional">Emotional</option>
          <option value="fantasy">Fantasy</option>
        </select>
      </div>

      {/* Custom Prompt */}
      <div className="mb-5">
        <label className="font-semibold text-gray-700">Additional Description</label>
        <textarea
          placeholder="Anything else you want in the story…"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          rows="4"
          className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full py-4 mt-4 bg-orange-600 text-white font-bold rounded-2xl shadow-lg hover:bg-orange-500 transition-all hover:scale-[1.02]"
      >
        Generate Story
      </button>
    </div>
  );
}
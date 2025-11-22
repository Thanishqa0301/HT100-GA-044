import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

export default function App() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Curvy Blur Lines */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-300 blur-[150px] opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300 blur-[150px] opacity-30 rounded-full translate-x-1/3 translate-y-1/3" />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 relative z-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">SnapWeave</h1>
        <button className="px-5 py-2 bg-black text-white rounded-xl shadow-md hover:bg-gray-800 transition">Login</button>
      </nav>

      {/* Main Section */}
      <main className="flex flex-col items-center text-center mt-10 relative z-10 px-4">
        <h2 className="text-5xl font-extrabold text-gray-900 max-w-3xl leading-tight">
          Turn Your Photos + Prompts Into Magical AI Stories
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          Upload photos, describe mood/emotion/place, and let SnapWeave create a beautiful AI-generated story for you.
        </p>

        {/* Prompt Input */}
        <div className="mt-10 w-full max-w-2xl">
          <textarea
            className="w-full h-32 p-4 border border-gray-300 rounded-2xl shadow focus:ring-2 focus:ring-black"
            placeholder="Describe emotion, place, vibe of your story..."
          ></textarea>
        </div>

        {/* Drag & Drop Area */}
        <motion.div
          className={`mt-8 w-full max-w-2xl p-10 border-2 border-dashed rounded-2xl transition ${
            dragActive ? "border-black bg-gray-50" : "border-gray-400"
          }`}
        >
          <div className="flex flex-col items-center gap-3 text-gray-700">
            <Upload size={40} />
            <p className="text-lg font-medium">Drag & Drop your images here</p>
            <p className="text-sm">or</p>
            <button className="px-5 py-2 bg-black text-white rounded-xl shadow hover:bg-gray-800 transition">
              Browse Files
            </button>
          </div>
        </motion.div>

        {/* Generate Button */}
        <button className="mt-10 px-10 py-4 bg-black text-white text-xl rounded-2xl shadow-lg hover:bg-gray-800 transition">
          Generate Story
        </button>
      </main>
    </div>
  );
}
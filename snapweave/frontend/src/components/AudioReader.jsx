// src/components/AudioReader.jsx
import React, { useRef, useEffect, useState } from "react";

export default function AudioReader({ audioUrl }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // reset when url changes
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlaying(false);
    }
  }, [audioUrl]);

  if (!audioUrl) return null;

  const handlePlay = async () => {
    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch (err) {
      console.error("Audio play failed", err);
    }
  };

  const handlePause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-4 rounded-xl shadow mt-6 flex items-center gap-4">
      <audio ref={audioRef} src={audioUrl} />
      {!playing ? (
        <button onClick={handlePlay} className="px-4 py-2 bg-indigo-600 text-white rounded">
          ▶ Play Audio
        </button>
      ) : (
        <button onClick={handlePause} className="px-4 py-2 bg-gray-700 text-white rounded">
          ⏸ Pause
        </button>
      )}
      <div className="text-sm text-gray-600">Background music optional—server may embed it.</div>
    </div>
  );
}
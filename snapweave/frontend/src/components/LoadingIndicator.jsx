import React from "react";

export default function LoadingIndicator() {
  return (
    <div className="flex flex-col items-center justify-center py-10 select-none">
      
      {/* Spinner */}
      <div className="loader"></div>

      {/* Loading Text */}
      <p className="mt-4 text-gray-700 text-lg font-medium tracking-wide">
        Generating your magical story…
      </p>
    </div>
  );
}
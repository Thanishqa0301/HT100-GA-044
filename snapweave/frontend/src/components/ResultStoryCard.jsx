import React from "react";

const ResultStoryCard = ({ story, images }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl p-8 mt-10 border border-white/40">

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Your Generated Story
      </h2>

      {/* Story Text */}
      <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line mb-6">
        {story}
      </p>

      {/* Images Section */}
      {images && images.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Generated Images
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 border border-gray-200 hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={'Generated Image ${index}'}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultStoryCard;
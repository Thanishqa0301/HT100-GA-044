import React, { useState } from "react";

export default function DragDrop({ onImagesSelected }) {
  const [images, setImages] = useState([]);

  const handleFiles = (files) => {
    const fileArray = Array.from(files);

    const imagesWithPreview = fileArray.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...imagesWithPreview]);

    if (onImagesSelected) {
      onImagesSelected(fileArray);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleBrowse = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
  };

  return (
    <div className="w-full flex flex-col items-center">

      {/* --- Drag & Drop Box --- */}
      <div
        className="w-full max-w-3xl p-10 mt-12 border-2 border-dashed border-gray-400 rounded-3xl
                   flex flex-col items-center justify-center bg-white shadow-xl
                   hover:border-orange-500 transition-all cursor-pointer"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload Photos</h2>
        <p className="text-gray-600 text-sm mb-5">
          Drag & drop your photos here or click to browse
        </p>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleBrowse}
          className="hidden"
          id="imageInput"
        />

        <label
          htmlFor="imageInput"
          className="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-500 transition-all font-semibold"
        >
          Browse
        </label>
      </div>

      {/* --- Image Preview Grid --- */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-10 max-w-3xl w-full">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={img.preview}
                className="w-full h-40 object-cover"
                alt="preview"
              />

              {/* Remove Button */}
              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
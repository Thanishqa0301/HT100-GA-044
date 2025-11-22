import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center text-center mt-16 px-6">
      
      {/* Logo */}
      <img
        src="/logo.png"
        alt="SnapWeave Logo"
        className="w-20 h-20 mb-4 drop-shadow-lg"
      />

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
        Create Stories from Your Photos & Imagination
      </h1>

      {/* Sub heading */}
      <p className="mt-4 text-gray-600 max-w-xl text-lg">
        Upload photos, describe emotions or places — and SnapWeave will convert
        your inputs into a magical AI-generated story with illustrations.
      </p>

      {/* Hero Image */}
      <div className="mt-10 w-full max-w-3xl">
        <img
          src="/hero-main.png"
          alt="SnapWeave Hero Banner"
          className="rounded-3xl shadow-2xl w-full object-cover"
        />
      </div>
    </section>
  );
}
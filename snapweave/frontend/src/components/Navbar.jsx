import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (


    <nav className="w-full flex justify-between items-center py-5 px-8 bg-transparent relative z-20">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="SnapWeave"
          className="w-12 h-12 object-contain drop-shadow-xl"
        />
        <h1 className="text-3xl font-extrabold tracking-wide text-gray-900">
          SnapWeave
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="px-5 py-2 rounded-xl text-sm font-semibold shadow-md bg-white hover:bg-gray-200 transition">
          About
        </button>

        <button className="px-5 py-2 rounded-xl text-sm font-semibold shadow-md bg-black text-white hover:bg-gray-800 transition">
          Login
        </button>
      </div>
    </nav>
  );
}

    export default function Navbar({ logoUrl }) {
  const logo = logoUrl || "/src/assets/logo.png";
  return (
    <nav className="w-full flex items-center justify-between px-8 py-5 z-20">
      <div className="flex items-center gap-3">
        <img src={logo} alt="SnapWeave logo" className="w-12 h-12 object-contain" />
        <h1 className="text-2xl font-extrabold">SnapWeave</h1>
      </div>
      <div>
        <button className="px-4 py-2 rounded bg-black text-white">Login</button>
      </div>
    </nav>
  );
}
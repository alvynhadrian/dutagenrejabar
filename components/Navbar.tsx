"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-400">
          Ruang<span className="text-blue-400">.Rekreasi</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-blue-500 font-medium">
          <Link href="/" className="hover:text-pink-400 transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-pink-400 transition">
            About
          </Link>
          <Link href="#contact" className="hover:text-pink-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`h-0.5 w-6 bg-gray-900 transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-gray-900 transition-all ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-gray-900 transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-4 gap-4 text-gray-700 font-medium bg-white">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

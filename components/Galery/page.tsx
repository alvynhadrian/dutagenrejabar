"use client";
import { useState } from "react";
import Image from "next/image";

export default function GalleryPage() {
  const images = [
    "/img/vynsatu.jpg",
    "/img/vyndua.jpg",
    "/img/vyntiga.jpg",
    "/img/vynempat.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const forward = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4 py-10">
      {/* TITLE */}
      <h1 className="text-2xl md:text-4xl font-bold text-blue-500 mb-6 text-center">
        Galeri Rekreasi
      </h1>

      {/* WRAPPER */}
      <div className="relative w-full max-w-4xl">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-[55vh] md:h-[65vh] rounded-2xl overflow-hidden shadow-xl border-2">
          <Image
            key={currentIndex}
            src={images[currentIndex]}
            alt="gallery"
            fill
            className="object-cover transition-all duration-500"
            priority
          />
        </div>

        {/* COUNTER */}
        <div className="absolute top-3 right-3 text-white bg-black/60 px-3 py-1 rounded-full text-sm">
          {currentIndex + 1}/{images.length}
        </div>

        {/* BUTTON LEFT */}
        <button
          onClick={previous}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition"
        >
          ❮
        </button>

        {/* BUTTON RIGHT */}
        <button
          onClick={forward}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition"
        >
          ❯
        </button>
      </div>
    </main>
  );
}

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center md:justify-center overflow-hidden pt-20 md:pt-12 pb-10">
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto w-full px-5 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto md:mx-0 text-center md:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight">
            <span className="block">
              Halo, Saya{" "}
              <span className="text-pink-400 font-bold">Shofwah</span>
            </span>

            <span className="block md:whitespace-nowrap">
              Duta Genre Jawa Barat 2025.
            </span>
          </h1>

          <motion.p
            className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Sebagai bagian dari Duta GenRe, saya berkomitmen untuk mengedukasi
            remaja tentang pentingnya perencanaan masa depan, kesehatan
            reproduksi, serta menjauhi pernikahan dini, seks bebas, dan NAPZA.
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-pink-400 to-pink-500 hover:from-blue-400 hover:to-blue-500 hover:scale-105 transition-all duration-300 shadow-lg">
              Kenal Lebih Dekat
            </button>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center md:justify-end mt-6 md:mt-0"
        >
          {/* BACK CARD */}
          <div className="absolute w-[200px] sm:w-[240px] md:w-[300px] h-[280px] sm:h-[320px] md:h-[380px] bg-white rounded-3xl shadow-xl rotate-6"></div>

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-[200px] sm:w-[240px] md:w-[300px] h-[280px] sm:h-[320px] md:h-[380px] rounded-3xl overflow-hidden shadow-lg border-4 border-white"
          >
            <Image
              src="/img/RAH.png"
              alt="Duta GenRe"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

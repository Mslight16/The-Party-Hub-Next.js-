"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Background Image */}
      <Image
        src="/images/partyhub.png"
        alt="Party Background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-20"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-linear-to-r from-yellow-400 via-yellow-700 to-yellow-400 bg-clip-text text-transparent">
          ThePartyHub
        </h1>

        <p className="text-gray-300 text-xl max-w-2xl mx-auto">
          Explore movies, cocktails, and delicious menus in one modern platform.
        </p>
   
      </motion.div>

    </section>
  );
}
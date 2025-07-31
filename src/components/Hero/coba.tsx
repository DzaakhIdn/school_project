"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

export default function HoverCard() {
  const [isHovered, setIsHovered] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Tambahkan offset saat update posisi mouse
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const bounds = e.currentTarget.getBoundingClientRect();
    const offsetX = 20; // Offset horizontal
    const offsetY = 20; // Offset vertikal
    const x = e.clientX - bounds.left + offsetX;
    const y = e.clientY - bounds.top + offsetY;
    rawX.set(x);
    rawY.set(y);
  }

  const springX = useSpring(rawX, { stiffness: 300, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 300, damping: 20 });

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-80 h-48 bg-gray-800 overflow-visible rounded-xl shadow-xl group cursor-pointer"
    >
      {/* Gambar */}
      <img
        src="https://source.unsplash.com/random/800x600"
        alt="Random"
        className="w-full h-full object-cover opacity-60 z-0"
      />

      {/* Text yang mengikuti kursor */}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none text-white font-medium text-sm px-4 py-2 bg-black bg-opacity-80 rounded-lg whitespace-nowrap z-50 shadow-lg border border-white/20"
          style={{
            x: springX,
            y: springY,
            translateX: "-5px", // Ubah nilai ini dari -20px menjadi -5px
            translateY: "-5px", // Ubah nilai ini dari -20px menjadi -5px
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          Ini adalah deskripsi
        </motion.div>
      )}
    </div>
  );
}

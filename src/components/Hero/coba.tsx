"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[200vh] flex items-center justify-center">
      <motion.div
        initial={{ y: 100, scale: 0.8, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.8}}
        viewport={{ once: false, amount: 0.4 }} // <= ini bikin reversible!
        className="aspect-video w-[300px] md:w-[500px] bg-blue-500 rounded-xl shadow-xl"
      >
        {/* Your content here */}
      </motion.div>
    </section>
  );
}

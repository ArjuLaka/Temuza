"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#6B4F3A] text-white py-20">

      <motion.div
        className="max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >

        <h2 className="text-4xl font-bold">
          Siap Mencoba TEMUZA?
        </h2>

        <p className="mt-4 text-white/80">
          Pesan sekarang dan rasakan kehangatan herbal alami.
        </p>

        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
        >

          <motion.a
            href="https://wa.me/6285234142683?text=Halo%20saya%20ingin%20order%20TEMUZA"
            target="_blank"
            className="bg-green-600 px-6 py-3 rounded-full flex items-center gap-2"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaWhatsapp size={20} />
            Whatsapp
          </motion.a>

          <motion.a
            href="https://instagram.com/temuza.store"
            target="_blank"
            className="bg-pink-600 px-6 py-3 rounded-full flex items-center gap-2"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaInstagram size={20} />
            Instagram
          </motion.a>

        </motion.div>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-white/60">
          © 2026 TEMUZA. All Rights Reserved.
        </div>

      </motion.div>

    </footer>
  );
}

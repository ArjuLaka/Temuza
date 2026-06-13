"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="bg-[#EAD7C0] py-14 md:min-h-[calc(100vh-73px)] md:py-10 flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid items-center gap-8 md:grid-cols-2 md:gap-x-12">

        <motion.div
          className="text-center md:col-start-2 md:row-start-1 md:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-5xl font-bold text-[#6B4F3A] sm:text-6xl"
            variants={fadeUp}
          >
            TEMUZA
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-[#6B4F3A] sm:text-xl"
            variants={fadeUp}
          >
            Jamu Serbuk Instan Jahe dan Temu Putih
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[17rem] sm:max-w-xs md:col-start-1 md:row-span-2 md:row-start-1 md:max-w-sm"
          initial={{ opacity: 0, scale: 0.92, y: 28 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            scale: { duration: 0.8, ease: "easeOut" },
            y: {
              delay: 0.8,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="absolute inset-5 rounded-[2rem] bg-[#F7F1EB]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-2xl shadow-[#6B4F3A]/15">
            <Image
              src="/Temuza.jpeg"
              alt="Temuza"
              width={240}
              height={240}
              className="h-auto w-full rounded-3xl object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center text-center md:col-start-2 md:row-start-2 md:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            className="text-gray-700"
            variants={fadeUp}
          >
            Solusi Herbal Praktis untuk Membantu
            Melancarkan Buang Air Kecil.
          </motion.p>

          <motion.div
            className="mt-7 inline-flex w-full flex-col rounded-2xl border border-[#A97142]/25 bg-[#F7F1EB]/70 px-5 py-4 shadow-lg shadow-[#6B4F3A]/10 backdrop-blur sm:mx-auto sm:max-w-md md:mx-0"
            variants={fadeUp}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#A97142]">
              Promo Terbatas
            </span>

            <div className="mt-2 flex flex-wrap items-end justify-center gap-3 md:justify-start">
              <span className="text-lg font-semibold text-gray-500 line-through">
                Rp 18.000
              </span>

              <span className="text-4xl font-bold text-[#6B4F3A]">
                Rp 15.000
              </span>
            </div>

            <span className="mt-2 text-sm text-gray-700">
              Berlaku hingga 30 Juni 2026
            </span>
          </motion.div>

          <motion.p
            className="mt-6 text-gray-700 text-2xl font-bold"
            variants={fadeUp}
          >
            Order via:
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 mt-8 justify-center sm:flex-row md:justify-start"
            variants={fadeUp}
          >
            <motion.a
              href="https://wa.me/6285234142683?text=Halo%20saya%20ingin%20order%20TEMUZA"
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaWhatsapp size={20} />
              Chat WhatsApp
            </motion.a>

            <motion.a
              href="https://instagram.com/temuza.store"
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-full border border-[#A97142] bg-[#c13584] px-6 py-3 text-white"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaInstagram size={20} />
              DM Instagram
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  HeartPulse,
  ShieldCheck,
  Thermometer,
  Leaf,
} from "lucide-react";

const benefits = [
  {
    icon: HeartPulse,
    title: "Kesehatan Saluran Kemih",
    desc: "Membantu menjaga kesehatan saluran kemih.",
  },
  {
    icon: Thermometer,
    title: "Menghangatkan Tubuh",
    desc: "Memberikan sensasi hangat alami dari jahe.",
  },
  {
    icon: ShieldCheck,
    title: "Menjaga Daya Tahan",
    desc: "Membantu menjaga kebugaran tubuh sehari-hari.",
  },
  {
    icon: Leaf,
    title: "Herbal Alami",
    desc: "Dibuat dari bahan herbal pilihan.",
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-24 py-20 bg-[#EAD7C0]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-center text-4xl font-bold text-[#6B4F3A] mb-14"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Keunggulan Produk
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="bg-white rounded-3xl p-6 shadow"
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Icon
                  className="mx-auto text-[#A97142]"
                  size={42}
                />

                <h3 className="mt-4 text-center font-bold text-[#6B4F3A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-center text-gray-600 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

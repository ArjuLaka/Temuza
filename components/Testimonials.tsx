"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const testimonials = [
  {
    name: "Arju Laka",
    text: "Rasanya hangat dan nyaman diminum saat pagi hari.",
  },
  {
    name: "Zainullah",
    text: "Praktis, tinggal seduh tanpa harus merebus.",
  },
  {
    name: "Azmi Prasasti",
    text: "Aromanya khas pedas rempahnya terasa dan tidak terlalu manis.",
  },
];

const testimonialVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20 bg-[#F7F1EB]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-center text-4xl font-bold text-[#6B4F3A] mb-12"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Testimoni
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              className="bg-white shadow rounded-3xl p-6"
              variants={testimonialVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <p className="italic text-gray-600">
                &ldquo;{item.text}&rdquo;
              </p>

              <h3 className="mt-4 font-bold text-[#6B4F3A]">
                {item.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    text: "Tuangkan 1 sachet TEMUZA ke dalam gelas.",
    image: "/steps/Langkah1.png",
  },
  {
    text: "Tambahkan 150-200 mL air panas.",
    image: "/steps/Langkah2.png",
  },
  {
    text: "Aduk hingga larut sempurna.",
    image: "/steps/Langkah3.png",
  },
  {
    text: "TEMUZA siap dinikmati.",
    image: "/steps/Langkah4.png",
  },
];

const stepVariants: Variants = {
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

export default function BrewingSteps() {
  return (
    <section id="brewing" className="scroll-mt-24 py-20 bg-[#EAD7C0]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-center text-4xl font-bold text-[#6B4F3A] mb-14"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Cara Penyajian
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <motion.div
              key={step.text}
              className="overflow-hidden rounded-3xl bg-white p-4 shadow-lg shadow-[#6B4F3A]/10"
              variants={stepVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#F7F1EB]">
                <Image
                  src={step.image}
                  alt={`Langkah ${index + 1} penyajian TEMUZA`}
                  fill
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw"
                  className="object-contain p-5"
                />
              </div>

              <div className="mt-5 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A97142] text-lg font-bold text-white">
                  {index + 1}
                </div>

                <p className="pt-1 text-gray-700">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

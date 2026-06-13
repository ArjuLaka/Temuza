"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";

const ingredients = [
  {
    name: "Jahe",
    image: "/ingredients/Jahe.jpg",
  },
  {
    name: "Temu Putih",
    image: "/ingredients/TemuPutih.jpg",
  },
  {
    name: "Kayu Manis",
    image: "/ingredients/KayuManis.jpg",
  },
  {
    name: "Gula Merah",
    image: "/ingredients/GulaMerah.jpg",
  },
  {
    name: "Gula Pasir",
    image: "/ingredients/GulaPasir.jpg",
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

export default function Ingredients() {
  return (
    <section id="ingredients" className="scroll-mt-24 py-20 bg-[#F7F1EB]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold text-[#6B4F3A] mb-12">
          Komposisi
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

          {ingredients.map((item, index) => (
            <motion.div
              key={item.name}
              className="overflow-hidden rounded-2xl bg-white p-4 text-center shadow-lg shadow-[#6B4F3A]/10"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-xl bg-[#EAD7C0]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 180px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <h3 className="mt-4 font-semibold text-[#6B4F3A]">
                {item.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

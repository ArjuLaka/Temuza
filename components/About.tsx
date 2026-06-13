"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 bg-[#F7F1EB]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#A97142]">
              Jamu Serbuk Instan
            </p>

            <h2 className="text-4xl font-bold text-[#6B4F3A]">
              Tentang TEMUZA
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                TEMUZA merupakan jamu serbuk instan berbahan dasar
                jahe dan temu putih yang diformulasikan untuk membantu
                menjaga kesehatan saluran kemih, menghangatkan tubuh,
                serta membantu menjaga daya tahan tubuh.
              </p>

              <p>
                Dengan bentuk serbuk instan yang praktis, TEMUZA dapat
                disajikan kapan saja tanpa perlu proses perebusan seperti
                jamu tradisional.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md"
            initial={{ opacity: 0, x: 36, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          >
            <div className="absolute inset-6 rounded-[2rem] bg-[#EAD7C0]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-4 shadow-xl shadow-[#6B4F3A]/10">
              <Image
                src="/Product.gif"
                alt="Produk TEMUZA"
                width={520}
                height={520}
                className="h-auto w-full rounded-3xl object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

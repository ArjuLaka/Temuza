"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  {
    label: "Tentang",
    href: "#about",
  },
  {
    label: "Keunggulan",
    href: "#benefits",
  },
  {
    label: "Komposisi",
    href: "#ingredients",
  },
  {
    label: "Penyajian",
    href: "#brewing",
  },
  {
    label: "Testimoni",
    href: "#testimonials",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#6B4F3A]/95 text-white shadow-lg shadow-[#6B4F3A]/15 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="TEMUZA"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
            <Image
              src="/Logo.png"
              alt="Logo TEMUZA"
              width={48}
              height={48}
              className="h-full w-full object-cover"
              priority
            />
          </span>

          <span className="text-xl font-bold tracking-wide">
            TEMUZA
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition hover:text-[#F7F1EB]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 md:hidden"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#6B4F3A] px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

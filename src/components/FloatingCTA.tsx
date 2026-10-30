"use client";
import { scrollPageTo } from "@/lib/pageScroll";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ctaMotion } from "@/components/ui/motion";

export default function FloatingCTA() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scrollPageTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Back to Top Button with AnimatePresence (Zero Scale) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToTop}
            aria-label="กลับสู่ด้านบน"
            className="p-3 bg-[#f2f7f4] text-[#112a23] hover:text-[#146348] border border-[#1b7a5a] flex items-center justify-center transition-colors shadow-md cursor-pointer"
          >
            <ChevronUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Direct LINE Floating Action with Tactile Hover (Zero Scale) */}
      <motion.a
        href="https://line.me/R/ti/p/@dr.chanon_clinic"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="แอดไลน์ปรึกษาแพทย์"
        {...ctaMotion}
        className="relative flex items-center gap-2.5 px-4 py-2.5 bg-[#0e3328] text-[#f2f7f4] hover:bg-[#154235] border border-[#1b7a5a] shadow-lg cursor-pointer"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6ee7b7] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6ee7b7]"></span>
        </span>
        <Image
          src="/images/line-128px.png"
          alt="LINE"
          width={18}
          height={18}
          className="w-4 h-4 object-contain"
        />
        <span className="font-sans text-xs sm:text-sm tracking-[0.05em] font-medium hidden sm:inline">
          LINE ปรึกษาแพทย์
        </span>
      </motion.a>

      {/* Direct Phone Floating Action (Zero Scale) */}
      <motion.a
        href="tel:0829199987"
        aria-label="โทรนัดตรวจ"
        {...ctaMotion}
        className="flex items-center gap-2 px-4 py-2 bg-[#f2f7f4] text-[#112a23] hover:bg-[#e2eee7] border border-[#1b7a5a] transition-colors shadow-md cursor-pointer"
      >
        <Image
          src="/images/apple-phone.png"
          alt="Phone"
          width={16}
          height={16}
          className="w-4 h-4 object-contain rounded-[3px]"
        />
        <span className="font-sans text-xs sm:text-sm tracking-[0.05em] font-medium hidden sm:inline">
          082 919 9987
        </span>
      </motion.a>
    </aside>
  );
}

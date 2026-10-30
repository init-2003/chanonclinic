"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { scrollPageTo } from "@/lib/pageScroll";
import { clinicPhotos } from "@/data/clinicPhotos";
import { motion, useInView } from "framer-motion";
import { BlurReveal, MotionSection, useMotionPreferences } from "@/components/ui/motion";
import FlowingClinicTitle from "@/components/FlowingClinicTitle";

const MotionImage = motion.create(Image);

interface PreHeroCoverProps {
  imageSrc?: string;
  clinicTitle?: string;
  subtitle?: string;
}

export default function PreHeroCover({
  imageSrc = clinicPhotos.receptionHall.src,
  clinicTitle = "คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา",
  subtitle = "ศูนย์ตรวจรักษาโรคกระดูก ข้อต่อ เส้นเอ็น และอัลตราซาวด์กล้ามเนื้อ",
}: PreHeroCoverProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  const { reduced, compact } = useMotionPreferences();
  return (
    <MotionSection ref={ref} profile="cover" className="relative z-30 w-full h-[calc(100vh-4rem)] min-h-[calc(100vh-4rem)] md:h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-4rem)] bg-[#0e3328] border-b border-[#cce2d8] select-none flex flex-col">
      <div className="relative w-full h-full flex-1 rounded-none overflow-hidden bg-[#0e3328]">
        {/* Background Medical Facility Image - Balanced Framing (Focus on Logo & Counter) */}
        <MotionImage
          src={imageSrc}
          alt={`${clinicTitle} — เคาน์เตอร์ต้อนรับและพื้นที่นั่งรอภายในคลินิก`}
          fill
          preload
          sizes="100vw"
          className="object-cover object-[50%_35%] sm:object-[50%_28%] filter brightness-[0.94]"
          initial={{ scale: reduced || compact ? 1 : 1.035 }}
          animate={{ scale: 1 }}
          transition={{ duration: reduced ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Gentle Gradients - Preserving bright, clean medical interior while maintaining text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/15 pointer-events-none" />

        {/* Cinematic Opening Veil Lift (Mount Only) */}
        <motion.div
          initial={{ opacity: reduced ? 0 : 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-[#0a1f18] pointer-events-none z-10"
        />


        {/* Upper-center headline leaves room for the letter flight before the next section. */}
        <div className="absolute inset-x-0 top-[20%] flex flex-col items-center p-6 text-center z-10 select-none pointer-events-none">
          <div className="max-w-4xl px-4 py-2">
            <FlowingClinicTitle />

            {/* Center-out hairline draw */}
            <motion.div
              initial={{ scaleX: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "center" }}
              className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#6ee7b7] to-transparent mx-auto my-3 sm:my-4 rounded-none"
            />

            <BlurReveal trigger="mount" delay={0.58} className="max-w-2xl mx-auto">
              <p className="font-sans text-xs sm:text-base text-white/95 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {subtitle}
              </p>
            </BlurReveal>
          </div>
        </div>

        {/* Scroll Down Prompt (Smooth scroll into Section 1) */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            const el = document.getElementById("hero");
            if (el) scrollPageTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: reduced ? "instant" : "smooth" });
          }}
          className="absolute bottom-4 sm:bottom-5 inset-x-0 flex flex-col items-center justify-center gap-1 z-20 text-white/80 hover:text-white cursor-pointer transition-colors group/scroll"
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase font-semibold">
            เลื่อนลงเพื่อเข้าสู่เนื้อหา
          </span>
          <motion.div
            animate={{ y: reduced || !inView ? 0 : [0, 5, 0] }}
            transition={{ repeat: reduced || !inView ? 0 : Infinity, duration: reduced ? 0 : 2, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/70 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}

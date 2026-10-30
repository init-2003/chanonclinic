"use client";

import React from "react";
import Image from "next/image";
import { siteMetadata } from "@/data/clinicData";
import { clinicPhotos } from "@/data/clinicPhotos";
import {
  MotionSection,
  MotionDiv,
  MaskReveal,
  BlurReveal,
} from "@/components/ui/motion";

export default function HeroSection() {

  return (
    <MotionSection
      id="hero"
      className="clinic-section relative bg-[#f2f7f4] overflow-visible"
      profile="introduction"
    >
      <div className="clinic-section-frame">
        <div className="clinic-section-layout grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Columns 1-2: Architectural Margin with Roman Numeral & Medical Green Spine */}
          <div className="clinic-section-index hidden lg:block lg:col-span-2 relative self-stretch">
            <div className="sticky top-28">
              <MaskReveal delay={0.05}>
                <span className="font-serif text-sm text-[#146348] tracking-[0.25em] font-normal block mb-2">
                  SECTION I
                </span>
                <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-[#416156] block">
                  INTRODUCTION
                </span>
              </MaskReveal>
            </div>
          </div>

          {/* Columns 3-12: Main Opening Grid */}
          <div className="clinic-section-content col-span-1 lg:col-span-10 clinic-introduction-grid grid grid-cols-1 lg:grid-cols-10 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-start space-y-6 pt-2">
              
              {/* Mobile Roman Numeral Badge */}
              <div className="lg:hidden flex items-center gap-2 mb-1">
                <span className="font-serif text-xs text-[#146348] tracking-[0.2em]">SECTION I</span>
                <span className="w-8 h-[1px] bg-[#1b7a5a]" />
              </div>

              {/* Eyebrow Label */}
              <BlurReveal
                delay={0.1}
                className="font-sans text-xs sm:text-sm uppercase tracking-[0.16em] text-[#146348] font-semibold"
              >
                Orthopedic, Sports Medicine & Ultrasound Center
              </BlurReveal>

              {/* Major Serif Statement Title (32-48px) with MaskReveal (No Thai word splitting) */}
              <MaskReveal delay={0.18}>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] text-[#112a23] font-normal tracking-tight leading-[1.18] max-w-2xl">
                  ศูนย์ตรวจรักษาโรคกระดูก ข้อต่อ เส้นเอ็น และ <span className="italic font-normal text-[#1b7a5a]">เวชศาสตร์การกีฬา</span> โดยแพทย์เฉพาะทาง
                </h2>
              </MaskReveal>

              {/* Body Prose with Staggered BlurReveal */}
              <div className="font-sans text-base sm:text-lg text-[#416156] leading-[1.8] max-w-2xl font-normal pt-1 space-y-4">
                <BlurReveal delay={0.32}>
                  <p>
                    {siteMetadata.tagline} ตรวจวินิจฉัยและรักษาอาการปวดข้อ ปวดเข่า ข้อเข่าเสื่อม ปวดไหล่ ข้อไหล่ติด เอ็นฉีกขาด ข้อเท้าพลิก นิ้วล็อก ปลอกหุ้มเอ็นอักเสบ พังผืดทับเส้นประสาท ชาปลายมือปลายเท้า หมอนรองกระดูกทับเส้น ตลอดจนการบาดเจ็บจากการเล่นกีฬาหรือออกกำลังกายทุกรูปแบบ
                  </p>
                </BlurReveal>
                <BlurReveal delay={0.46}>
                  <p>
                    ให้บริการผ่าตัดส่องกล้องข้อต่อ (Arthroscopy) ผ่าตัดศัลยกรรมกระดูกและข้อ และฉีดยาข้อด้วยคลื่นเสียงอัลตราซาวด์ความละเอียดสูงนำวิถี (Ultrasound-Guided Injection) เพื่อความแม่นยำ ตรงจุด ลดความเจ็บปวด และฟื้นตัวได้อย่างรวดเร็ว โดยแพทย์เฉพาะทางในบรรยากาศอบอุ่นเป็นกันเอง
                  </p>
                </BlurReveal>
              </div>
            </div>

            {/* Right Column: Narrower Portrait Lead Image with Frame Mask & Depth Parallax */}
            <div className="lg:col-span-4 relative mt-4 lg:mt-0">
              <div className="w-full">
                <MotionDiv
                  effect="frame-up" duration={0.9} delay={0.08}
                >
                  <div className="relative border border-[#1b7a5a] p-2 bg-[#f2f7f4] z-20 shadow-none">
                    <div className="relative aspect-3/4 sm:aspect-4/5 w-full overflow-hidden bg-[#e2eee7]">
                      <Image
                        src={clinicPhotos.receptionStaff.src}
                        alt={clinicPhotos.receptionStaff.alt}
                        fill
                        quality={90}
                        sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, 100vw"
                        className="object-cover"
                        style={{ objectPosition: clinicPhotos.receptionStaff.objectPosition }}
                      />
                    </div>
                    <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[11px] font-sans text-[#146348] tracking-[0.08em]">
                      <span>คลินิกกระดูกและข้อ นพ.ชานนท์-พญ.พัดชา</span>
                      <span className="text-[#416156]">พร้อมบริการด้วยความใส่ใจ</span>
                    </div>
                  </div>
                </MotionDiv>
              </div>
            </div>

          </div>
        </div>
      </div>
    </MotionSection>
  );
}

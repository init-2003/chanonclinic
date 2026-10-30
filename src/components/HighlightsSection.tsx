"use client";

import React from "react";
import Image from "next/image";
import { whyChooseUsSectionData, aboutSectionData } from "@/data/clinicData";
import {
  MotionSection,
  MotionDiv,
  MotionLine,
  MaskReveal,
  BlurReveal,
} from "@/components/ui/motion";

export default function HighlightsSection() {
  return (
    <MotionSection
      id="why-us"
      className="clinic-section bg-[#e2eee7] relative overflow-visible"
      profile="standards"
    >
      <div className="clinic-section-frame">
        <div className="clinic-section-layout grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Columns 1-2: Architectural Margin with Roman Numeral II & Medical Green Spine */}
          <div className="clinic-section-index hidden lg:block lg:col-span-2 relative self-stretch">
            <div className="sticky top-28">
              <MaskReveal delay={0.05}>
                <span className="font-serif text-sm text-[#146348] tracking-[0.25em] font-normal block mb-2">
                  SECTION II
                </span>
                <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-[#416156] block">
                  STANDARDS
                </span>
              </MaskReveal>
            </div>
          </div>

          {/* Columns 3-12: Main Content */}
          <div className="clinic-section-content col-span-1 lg:col-span-10 space-y-16">
            
            {/* Mobile Roman Numeral */}
            <div className="lg:hidden flex items-center gap-2">
              <span className="font-serif text-xs text-[#146348] tracking-[0.2em]">SECTION II</span>
              <span className="w-8 h-[1px] bg-[#1b7a5a]" />
            </div>

            <div className="clinic-section-heading max-w-2xl space-y-2">
              <BlurReveal delay={0.08} className="font-sans text-xs sm:text-sm uppercase tracking-[0.16em] text-[#146348] font-semibold block">
                Clinical Standards & Hygiene
              </BlurReveal>
              <MaskReveal delay={0.16}>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#112a23] font-normal tracking-tight leading-[1.2]">
                  {whyChooseUsSectionData.sectionTitleTh}
                </h2>
              </MaskReveal>
              <BlurReveal delay={0.28}>
                <p className="font-sans text-base text-[#416156] leading-[1.75] mt-2">
                  มาตรฐานความสะอาดระดับสากล เครื่องมือทางการแพทย์ทันสมัย ปลอดภัย และเป็นมิตรในทุกขั้นตอนการรักษา
                </p>
              </BlurReveal>
            </div>

            {/* 1. Concise Supporting Facts Bar (Ruled 3-Column Architectural Row with Line Draw) */}
            <MotionDiv
              className=""
              effect="fade" duration={0.5}
            >
              <div className="clinic-grid clinic-grid--sage clinic-facts-grid grid-cols-1 sm:grid-cols-3">
                <MotionDiv
                  className="space-y-2"
                  effect="from-left" delay={0.04}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-lg text-[#146348]">01</span>
                    <MotionLine delay={0.12} style={{ transformOrigin: "left" }} className="h-[1px] w-6 bg-[#1b7a5a]" />
                    <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#416156] font-semibold">Specialist Care</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#112a23] font-normal">
                    แพทย์เฉพาะทางกระดูกและข้อ
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[#416156] leading-[1.7]">
                    ตรวจวินิจฉัยและให้การรักษาโดยแพทย์เฉพาะทางด้านกระดูก ข้อต่อ และเวชศาสตร์การกีฬา
                  </p>
                </MotionDiv>

                <MotionDiv
                  className="space-y-2"
                  effect="from-left" delay={0.12}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-lg text-[#146348]">02</span>
                    <MotionLine delay={0.12} style={{ transformOrigin: "left" }} className="h-[1px] w-6 bg-[#1b7a5a]" />
                    <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#416156] font-semibold">Patient First</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#112a23] font-normal">
                    ดูแลใส่ใจ อธิบายละเอียดทุกเคส
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[#416156] leading-[1.7]">
                    รับฟังปัญหาอย่างเข้าใจ อธิบายภาพผลตรวจอัลตราซาวด์ให้เห็นชัดเจนก่อนเริ่มการรักษา
                  </p>
                </MotionDiv>

                <MotionDiv
                  className="space-y-2"
                  effect="from-left" delay={0.2}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-lg text-[#146348]">03</span>
                    <MotionLine delay={0.12} style={{ transformOrigin: "left" }} className="h-[1px] w-6 bg-[#1b7a5a]" />
                    <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#416156] font-semibold">Convenience</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#112a23] font-normal">
                    สะดวกสบาย มีที่จอดรถรองรับ
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[#416156] leading-[1.7]">
                    ตั้งอยู่ริมถนนชยางกูร (ตรงข้ามร้าน ฟ.ฟัน ราชเวช) เดินทางสะดวก พร้อมที่จอดรถรองรับกว้างขวาง
                  </p>
                </MotionDiv>
              </div>
            </MotionDiv>

            {/* 2. Standards: image reveals follow the card's local entrance. */}
            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseUsSectionData.items.map((item, idx) => (
                  <MotionDiv
                    key={item.id}
                    className="relative isolate bg-white border border-[#bdd8cb] p-6 flex flex-col justify-between transition-colors cursor-default"
                    effect="fade" delay={idx * 0.08}
                  >

                    <div>
                      <MotionDiv
                        className="aspect-square relative w-full mb-5 overflow-hidden border border-[#cce2d8] bg-[#e2eee7]"
                        effect="frame-up" duration={0.8} delay={idx * 0.08} inherit
                      >
                        <Image
                          src={item.photo.src}
                          alt={item.photo.alt}
                          fill
                          sizes="(min-width: 1024px) 20vw, (min-width: 768px) 45vw, 100vw"
                          className="object-cover"
                          style={{ objectPosition: item.photo.objectPosition }}
                        />
                      </MotionDiv>
                      <span className="font-serif text-sm text-[#146348] tracking-widest block mb-1">
                        PILLAR 0{idx + 1}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-[#112a23] font-normal leading-snug mb-2">
                        {item.titleTh}
                      </h3>
                      <p className="font-sans text-sm sm:text-[15px] text-[#416156] leading-[1.7]">
                        {item.descriptionTh}
                      </p>
                    </div>
                    <div className="mt-6 pt-3 border-t border-[#cce2d8] flex items-center justify-between text-xs font-sans text-[#146348] uppercase tracking-[0.1em]">
                      <span>Hospital Grade</span>
                      <span className="text-[#416156]">Verified</span>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>

            {/* 3. About Clinic Story (Editorial Layout: Statement beside Framed Image) */}
            <div className="border-t border-[#bdd8cb] pt-14">
              <div className="clinic-split clinic-about-panel grid grid-cols-1 lg:grid-cols-12 items-stretch overflow-hidden">
                <div className="lg:col-span-7 space-y-4">
                  <BlurReveal delay={0.08} className="font-sans text-xs sm:text-sm uppercase tracking-[0.16em] text-[#146348] font-semibold">
                    About The Practice
                  </BlurReveal>
                  <MaskReveal delay={0.16}>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#112a23] font-normal tracking-tight leading-[1.25]">
                      {aboutSectionData.titleTh}
                    </h3>
                  </MaskReveal>
                  <BlurReveal delay={0.28}>
                    <p className="font-sans text-base sm:text-lg text-[#416156] leading-[1.75]">
                      {aboutSectionData.descriptionTh}
                    </p>
                  </BlurReveal>
                </div>

                <div className="lg:col-span-5 relative">
                  <MotionDiv
                    effect="frame-center" duration={0.85}
                  >
                    <div className="p-2 bg-[#f2f7f4]">
                      <div className="relative aspect-square w-full overflow-hidden bg-[#e2eee7]">
                        <Image
                          src={aboutSectionData.collageImage}
                          alt="อาคารด้านหน้าและป้ายคลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา ในช่วงค่ำ"
                          fill
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </MotionDiv>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </MotionSection>
  );
}

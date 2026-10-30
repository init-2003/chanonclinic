"use client";

import React from "react";
import { Award, MessageCircle } from "lucide-react";
import { doctorSectionData, DentalSpecialtyItem } from "@/data/clinicData";
import { motion } from "framer-motion";
import {
  MotionSection,
  MotionDiv,
  MotionLine,
  MaskReveal,
  BlurReveal,
  Magnetic,
  ctaMotion,
} from "@/components/ui/motion";

export default function DoctorsSection() {
  return (
    <MotionSection
      id="doctors"
      className="clinic-section bg-[#e2eee7] relative"
      profile="specialists"
    >
      <div className="clinic-section-frame">
        <div className="clinic-section-layout grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Columns 1-2: Architectural Margin with Roman Numeral IV & Medical Green Spine */}
          <div className="clinic-section-index hidden lg:block lg:col-span-2 relative self-stretch">
            <div className="sticky top-28">
              <MaskReveal delay={0.05}>
                <span className="font-serif text-sm text-[#146348] tracking-[0.25em] font-normal block mb-2">
                  SECTION IV
                </span>
                <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-[#416156] block">
                  SPECIALISTS
                </span>
              </MaskReveal>
            </div>
          </div>

          {/* Columns 3-12: Main Doctors & Specialties Content */}
          <div className="clinic-section-content col-span-1 lg:col-span-10 space-y-12">
            
            {/* Mobile Roman Numeral */}
            <div className="lg:hidden flex items-center gap-2">
              <span className="font-serif text-xs text-[#146348] tracking-[0.2em]">SECTION IV</span>
              <span className="w-8 h-[1px] bg-[#1b7a5a]" />
            </div>

            {/* Section Header */}
            <div className="clinic-section-heading max-w-3xl space-y-3">
              <BlurReveal delay={0.08} className="font-sans text-xs sm:text-sm uppercase tracking-[0.16em] text-[#146348] font-semibold">
                Orthopedic Physicians & Specialists
              </BlurReveal>
              <MaskReveal delay={0.16}>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#112a23] font-normal tracking-tight leading-[1.2]">
                  {doctorSectionData.sectionTitleTh}
                </h2>
              </MaskReveal>
              <BlurReveal delay={0.28}>
                <p className="font-sans text-base sm:text-lg text-[#416156] leading-[1.75]">
                  {doctorSectionData.teamSummaryTh}
                </p>
              </BlurReveal>
            </div>

            {/* Ruled Rows Pattern for Specialties with Zero Layout Shift */}
            <div className="clinic-specialty-table">
              {doctorSectionData.specialties.map((item: DentalSpecialtyItem, idx) => (
                <MotionDiv
                  key={item.id}
                  className="clinic-specialty-row group py-6 border-b border-[#bdd8cb] grid grid-cols-1 md:grid-cols-12 gap-4 items-start px-3 transition-colors duration-200 hover:bg-[#146348]/[0.06] cursor-default"
                  effect="fade" duration={0.45}
                >
                  {/* Column 1-2: Index */}
                  <MotionDiv
                    className="md:col-span-2 flex items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-1"
                    effect="from-left" duration={0.5} inherit
                  >
                    <span className="font-serif text-lg text-[#146348]">
                      0{idx + 1}
                    </span>
                    <MotionLine delay={0.06} style={{ transformOrigin: "left" }} className="h-[1px] w-6 bg-[#1b7a5a]" />
                    <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#416156] md:hidden">
                      {item.nameEn}
                    </span>
                  </MotionDiv>

                  {/* Column 3-6: Serif Title */}
                  <MotionDiv
                    className="md:col-span-4 space-y-1"
                    effect="from-left" duration={0.6} delay={0.08} inherit
                  >
                    <h3 className="font-serif text-xl sm:text-2xl text-[#112a23] font-normal leading-snug">
                      {item.nameTh}
                    </h3>
                    <p className="hidden md:block font-sans text-xs uppercase tracking-[0.16em] text-[#146348]">
                      {item.nameEn}
                    </p>
                  </MotionDiv>

                  {/* Column 7-12: Description */}
                  <MotionDiv
                    className="md:col-span-6"
                    effect="fade" duration={0.6} delay={0.18} inherit
                  >
                    <p className="font-sans text-sm sm:text-base text-[#416156] leading-[1.7]">
                      {item.descriptionTh}
                    </p>
                  </MotionDiv>
                </MotionDiv>
              ))}
            </div>

            {/* Doctor Consultation Banner (Deep Surgical Pine Panel on Pale Sage Field) */}
            <MotionDiv
              effect="fade" duration={0.7}
            >
              <div className="bg-[#0e3328] text-[#f2f7f4] p-8 lg:p-10 border border-[#1f4f41] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2 text-[#6ee7b7]">
                    <Award className="w-5 h-5 text-[#6ee7b7]" />
                    <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold">
                      Direct Physician Consultation
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] text-[#f2f7f4] font-normal leading-snug">
                    ต้องการปรึกษาปัญหาโรคกระดูก ข้อต่อ หรือการตรวจอัลตราซาวด์กับแพทย์เฉพาะทาง?
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#a8cbbf] leading-[1.7]">
                    สอบถามอาการหรือนัดหมายคิวตรวจกับแพทย์ผู้เชี่ยวชาญได้โดยตรงผ่าน LINE Official
                  </p>
                </div>

                <Magnetic strength={0.16} max={5}>
                  <motion.a
                    href="https://line.me/R/ti/p/@dr.chanon_clinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...ctaMotion}
                    className="btn-luxury-on-charcoal shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    <span>ปรึกษาแพทย์ผ่าน LINE</span>
                  </motion.a>
                </Magnetic>
              </div>
            </MotionDiv>

          </div>
        </div>
      </div>
    </MotionSection>
  );
}

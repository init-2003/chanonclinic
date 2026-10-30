"use client";

import React, { useSyncExternalStore } from "react";
import Image from "next/image";
import {
  ultrasoundServices,
  type UltrasoundService,
} from "@/data/ultrasoundData";
import { motion } from "framer-motion";
import {
  MotionSection,
  MotionDiv,
  MaskReveal,
  BlurReveal,
  Magnetic,
  ctaMotion,
} from "@/components/ui/motion";

function subscribeColumns(callback: () => void) {
  const tablet = window.matchMedia("(min-width: 768px)");
  const desktop = window.matchMedia("(min-width: 1024px)");
  tablet.addEventListener("change", callback);
  desktop.addEventListener("change", callback);
  return () => {
    tablet.removeEventListener("change", callback);
    desktop.removeEventListener("change", callback);
  };
}
function getColumns() {
  return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
}
const getServerColumns = () => 1;

export default function ServicesSection() {
  const columns = useSyncExternalStore(subscribeColumns, getColumns, getServerColumns);
  return (
    <MotionSection
      id="services"
      className="clinic-section bg-[#f2f7f4] relative"
      profile="diagnostics"
    >
      <div className="clinic-section-frame">
        <div className="clinic-section-layout grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Columns 1-2: Architectural Margin with Roman Numeral III & Medical Green Spine */}
          <div className="clinic-section-index hidden lg:block lg:col-span-2 relative self-stretch">
            <div className="sticky top-28">
              <MaskReveal delay={0.05}>
                <span className="font-serif text-sm text-[#146348] tracking-[0.25em] font-normal block mb-2">
                  SECTION III
                </span>
                <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-[#416156] block">
                  DIAGNOSTICS
                </span>
              </MaskReveal>
            </div>
          </div>

          {/* Columns 3-12: Main Services Content */}
          <div className="clinic-section-content col-span-1 lg:col-span-10 space-y-12">
            
            {/* Mobile Roman Numeral */}
            <div className="lg:hidden flex items-center gap-2">
              <span className="font-serif text-xs text-[#146348] tracking-[0.2em]">SECTION III</span>
              <span className="w-8 h-[1px] bg-[#1b7a5a]" />
            </div>

            {/* Section Header */}
            <div className="clinic-section-heading max-w-3xl space-y-3">
              <BlurReveal delay={0.08} className="font-sans text-xs sm:text-sm uppercase tracking-[0.16em] text-[#146348] font-semibold">
                High-Resolution Ultrasound Diagnostic Center
              </BlurReveal>
              <MaskReveal delay={0.16}>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#112a23] font-normal tracking-tight leading-[1.2]">
                  บริการตรวจคลื่นเสียงอัลตราซาวด์เฉพาะทาง
                </h2>
              </MaskReveal>
              <BlurReveal delay={0.28}>
                <p className="font-sans text-base sm:text-lg text-[#416156] leading-[1.75]">
                  ตรวจคัดกรองอวัยวะภายในอย่างแม่นยำ ปลอดภัย ไร้รังสีสะสม รู้ผลทันทีในวันเดียว
                  โดยแพทย์ผู้เชี่ยวชาญ ครอบคลุม 4 หมวดอวัยวะสำคัญ รวม {ultrasoundServices.length} โปรแกรมตรวจมาตรฐาน
                </p>
              </BlurReveal>
            </div>

            {/* 4 Value Pillars in Architectural Ruled Layout */}
            <MotionDiv
              className="clinic-grid clinic-grid--sage clinic-value-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              effect="fade" duration={0.5}
            >
              <div className="p-4 border-r border-[#cce2d8] last:border-r-0 space-y-1.5">
                <div className="text-[#146348]">
                  <span className="font-serif text-xs tracking-wider font-semibold">SAFETY</span>
                </div>
                <h4 className="font-serif text-lg text-[#112a23] font-normal">ปลอดภัย ไร้รังสี</h4>
                <p className="font-sans text-sm sm:text-base text-[#416156] leading-[1.7]">
                  ใช้คลื่นเสียงความถี่สูง ไม่สะสมรังสี ตรวจซ้ำได้บ่อยอย่างปลอดภัย
                </p>
              </div>

              <div className="p-4 border-r border-[#cce2d8] last:border-r-0 space-y-1.5">
                <div className="text-[#146348]">
                  <span className="font-serif text-xs tracking-wider font-semibold">CLARITY</span>
                </div>
                <h4 className="font-serif text-lg text-[#112a23] font-normal">คมชัดทุกรายละเอียด</h4>
                <p className="font-sans text-sm sm:text-base text-[#416156] leading-[1.7]">
                  เครื่องอัลตราซาวด์ความละเอียดสูง เห็นเนื้อเยื่อและก้อนเนื้อขนาดเล็กชัดเจน
                </p>
              </div>

              <div className="p-4 border-r border-[#cce2d8] last:border-r-0 space-y-1.5">
                <div className="text-[#146348]">
                  <span className="font-serif text-xs tracking-wider font-semibold">EXPERTISE</span>
                </div>
                <h4 className="font-serif text-lg text-[#112a23] font-normal">แพทย์ตรวจเองทุกเคส</h4>
                <p className="font-sans text-sm sm:text-base text-[#416156] leading-[1.7]">
                  แพทย์เฉพาะทางตรวจ วินิจฉัย และอธิบายผลอย่างละเอียดเป็นรายบุคคล
                </p>
              </div>

              <div className="p-4 border-r border-[#cce2d8] last:border-r-0 space-y-1.5">
                <div className="text-[#146348]">
                  <span className="font-serif text-xs tracking-wider font-semibold">EFFICIENCY</span>
                </div>
                <h4 className="font-serif text-lg text-[#112a23] font-normal">รู้ผลในวันเดียว</h4>
                <p className="font-sans text-sm sm:text-base text-[#416156] leading-[1.7]">
                  รับรายงานผลและภาพถ่ายอัลตราซาวด์ได้ทันทีหลังเสร็จสิ้นการตรวจ
                </p>
              </div>
            </MotionDiv>

            {/* Service cards stagger by responsive row. */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {ultrasoundServices.map((service: UltrasoundService, sIdx: number) => {
                const waveDelay = (sIdx % columns) * 0.08;
                return (
                  <MotionDiv
                    key={service.id}
                    className="relative isolate bg-white border border-[#cce2d8] flex flex-col transition-colors overflow-hidden group cursor-default"
                    effect="fade" delay={waveDelay}
                  >


                    {/* Card Body - Concise & Essential Information */}
                    <MotionDiv
                      className="p-6 space-y-4 flex-1"
                      effect="rise" duration={0.6} delay={waveDelay + 0.12} inherit
                    >
                      {/* Number & Title */}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-serif text-sm text-[#146348] tracking-widest">
                            PROG {String(sIdx + 1).padStart(2, "0")}
                          </span>
                          <span className="h-[1px] w-4 bg-[#1b7a5a]" />
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl text-[#112a23] font-normal leading-snug">
                          {service.titleTh}
                        </h3>
                        <p className="font-sans text-xs uppercase tracking-[0.1em] text-[#416156] mt-0.5">
                          {service.titleEn}
                        </p>
                      </div>

                      {/* Target Organs */}
                      <div className="pt-2 border-t border-[#cce2d8]/60 space-y-1">
                        <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#146348] font-semibold block">
                          อวัยวะที่ตรวจ
                        </span>
                        <p className="font-sans text-sm text-[#112a23] leading-[1.6]">
                          {service.targetOrgans.join(" • ")}
                        </p>
                      </div>

                      {/* Key Symptoms / Indications */}
                      <div className="space-y-1">
                        <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#146348] font-semibold block">
                          อาการที่ควรตรวจ
                        </span>
                        <p className="font-sans text-xs text-[#416156] leading-[1.6]">
                          {service.symptoms.slice(0, 3).join(", ")}
                        </p>
                      </div>

                      {/* What it Detects / ตรวจพบอะไรบ้าง */}
                      <div className="pt-2 border-t border-[#cce2d8]/60 space-y-1.5">
                        <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#146348] font-semibold block">
                          สิ่งที่ตรวจพบ / คัดกรอง
                        </span>
                        <ul className="font-sans text-xs text-[#416156] space-y-1 leading-[1.6]">
                          {service.findings.slice(0, 3).map((item, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-1.5">
                              <span className="text-[#146348] shrink-0 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Preparation Instruction */}
                      <div className="pt-2 border-t border-[#cce2d8]/60 space-y-0.5">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-[#146348] font-semibold block">
                          คำแนะนำการเตรียมตัว:
                        </span>
                        <p className="font-sans text-xs text-[#416156] leading-[1.6]">
                          {service.preparation.instruction}
                        </p>
                      </div>
                    </MotionDiv>
                  </MotionDiv>
                );
              })}
            </div>

            {/* Advisory Information Banner */}
            <MotionDiv
              effect="frame-center" duration={0.75}
            >
              <div className="border border-[#1b7a5a] p-6 lg:p-8 bg-[#e2eee7]/50">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-2">
                    <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.16em] text-[#146348] font-semibold">
                      Clinical Advice & Consultation
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#112a23] font-normal leading-snug">
                      ต้องการนัดหมายตรวจอัลตราซาวด์ หรือไม่แน่ใจว่าควรตรวจโปรแกรมใด?
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#416156] leading-[1.75]">
                      แพทย์และเจ้าหน้าที่ยินดีให้คำปรึกษาประเมินอาการเบื้องต้น เพื่อเลือกโปรแกรมตรวจที่ตรงจุดที่สุดสำหรับท่าน
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                    <Magnetic strength={0.16} max={5}>
                      <motion.a
                        href="https://line.me/R/ti/p/@dr.chanon_clinic"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...ctaMotion}
                        className="btn-luxury-primary text-center flex items-center justify-center w-full"
                      >
                        <Image
                          src="/images/line-128px.png"
                          alt="LINE"
                          width={18}
                          height={18}
                          className="w-4 h-4 mr-2 object-contain"
                        />
                        <span>ปรึกษาแพทย์ผ่าน LINE</span>
                      </motion.a>
                    </Magnetic>
                    <motion.a
                      href="tel:0829199987"
                      {...ctaMotion}
                      className="btn-luxury-secondary text-center flex items-center justify-center w-full"
                    >
                      <Image
                        src="/images/apple-phone.png"
                        alt="Phone"
                        width={18}
                        height={18}
                        className="w-4 h-4 mr-2 object-contain rounded-[3px]"
                      />
                      <span>โทร: 082 919 9987</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </MotionDiv>

          </div>
        </div>
      </div>
    </MotionSection>
  );
}

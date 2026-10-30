"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { branchesData } from "@/data/clinicData";
import { clinicPhotos } from "@/data/clinicPhotos";
import {
  MotionSection,
  MotionDiv,
  MaskReveal,
  BlurReveal,
} from "@/components/ui/motion";

export default function ContactSection() {
  const clinic = branchesData[0];

  return (
    <MotionSection
      id="contact"
      className="clinic-section bg-[#f2f7f4] text-[#112a23] relative overflow-visible"
      profile="contact"
    >
      <div className="clinic-section-frame">
        <div className="clinic-section-layout grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Columns 1-2: Architectural Margin with Roman Numeral V & Medical Green Spine */}
          <div className="clinic-section-index hidden lg:block lg:col-span-2 relative self-stretch">
            <div className="sticky top-28">
              <MaskReveal delay={0.05}>
                <span className="font-serif text-sm text-[#146348] tracking-[0.25em] font-normal block mb-2">
                  SECTION V
                </span>
                <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-[#416156] block">
                  CONTACT
                </span>
              </MaskReveal>
            </div>
          </div>

          {/* Columns 3-12: Main Contact Content */}
          <div className="clinic-section-content col-span-1 lg:col-span-10 space-y-16">
            
            {/* Mobile Roman Numeral */}
            <div className="lg:hidden flex items-center gap-2">
              <span className="font-serif text-xs text-[#146348] tracking-[0.2em]">SECTION V</span>
              <span className="w-8 h-[1px] bg-[#1b7a5a]" />
            </div>

            {/* Contact introduction with a full-width clinic image beside the title. */}
            <div className="clinic-contact-overview grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#cce2d8] pb-16">
              
              {/* Left Column: Large Title (Cols 1-5) */}
              <div className="lg:col-span-5 space-y-4">
                <BlurReveal delay={0.08} className="font-sans text-xs sm:text-sm uppercase tracking-[0.16em] text-[#146348] font-semibold block">
                  Section V • Location & Consultations
                </BlurReveal>
                <MaskReveal delay={0.16}>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] text-[#112a23] font-normal tracking-tight leading-[1.3]">
                    พร้อมดูแลสุขภาพกระดูก ข้อต่อ และการวินิจฉัยที่แม่นยำ
                  </h2>
                </MaskReveal>
                <BlurReveal delay={0.28}>
                  <p className="font-sans text-base sm:text-lg text-[#416156] leading-[1.75] max-w-md pt-1">
                    นัดหมายปรึกษาแพทย์เฉพาะทาง หรือสอบถามข้อมูลการตรวจอัลตราซาวด์ ที่คลินิกในจังหวัดอุบลราชธานี (ถ.ชยางกูร ตรงข้ามร้าน ฟ.ฟัน ราชเวช)
                  </p>
                </BlurReveal>
              </div>

              {/* Clinic image fills the remaining seven columns. */}
              <div className="lg:col-span-7 flex justify-center">
                <MotionDiv
                  className="w-full"
                  effect="from-right" duration={0.8} delay={0.06}
                >
                  <div className="border border-[#bdd8cb] p-2 bg-[#e2eee7] shadow-sm">
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-white">
                      <Image
                        src={clinicPhotos.receptionWelcome.src}
                        alt={clinicPhotos.receptionWelcome.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                        style={{ objectPosition: clinicPhotos.receptionWelcome.objectPosition }}
                      />
                    </div>
                  </div>
                </MotionDiv>
              </div>

            </div>

            {/* Single Clinic Location Details & Google Map */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left: Clinic Info Card (Cols 1-6) */}
              <MotionDiv
                className="lg:col-span-6"
                effect="from-left" duration={0.7}
              >
                <div className="bg-white border border-[#cce2d8] p-8 flex flex-col justify-between h-full space-y-6 shadow-sm">
                  <div className="space-y-6">
                    <div className="border-b border-[#cce2d8] pb-4 flex items-start justify-between">
                      <div>
                        <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#146348] font-semibold block mb-1">
                          {clinic.landmarkTh}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl text-[#112a23] font-normal leading-snug">
                          {clinic.nameTh}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-[#416156] uppercase tracking-wider mt-0.5">
                          {clinic.nameEn}
                        </p>
                      </div>
                      <div className="p-2 border border-[#bdd8cb] bg-[#e2eee7] text-[#146348]">
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Information Rows */}
                    <div className="space-y-4 font-sans text-sm sm:text-base">
                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <Navigation className="w-4 h-4 text-[#1b7a5a] shrink-0 mt-1" />
                        <div>
                          <span className="text-xs uppercase tracking-[0.16em] text-[#146348] font-semibold block">
                            ที่อยู่คลินิก
                          </span>
                          <span className="text-[#416156] leading-[1.7]">
                            {clinic.addressTh}
                          </span>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-[#1b7a5a] shrink-0 mt-1" />
                        <div>
                          <span className="text-xs uppercase tracking-[0.16em] text-[#146348] font-semibold block">
                            เวลาทำการ
                          </span>
                          <span className="text-[#416156] leading-[1.7]">
                            {clinic.openingHoursDisplayTh}
                          </span>
                        </div>
                      </div>

                      {/* Telephone */}
                      <div className="flex items-start gap-3">
                        <Image
                          src="/images/apple-phone.png"
                          alt="Phone"
                          width={18}
                          height={18}
                          className="w-4 h-4 object-contain mt-1 rounded-[3px]"
                        />
                        <div>
                          <span className="text-xs uppercase tracking-[0.16em] text-[#146348] font-semibold block">
                            เบอร์โทรศัพท์
                          </span>
                          <a
                            href={`tel:${clinic.phoneTel}`}
                            className="text-[#112a23] hover:text-[#1b7a5a] transition-colors font-semibold"
                          >
                            {clinic.phoneDisplay}
                          </a>
                        </div>
                      </div>

                      {/* LINE */}
                      <div className="flex items-start gap-3">
                        <Image
                          src="/images/line-128px.png"
                          alt="LINE"
                          width={18}
                          height={18}
                          className="w-4 h-4 object-contain mt-1"
                        />
                        <div>
                          <span className="text-xs uppercase tracking-[0.16em] text-[#146348] font-semibold block">
                            LINE Official
                          </span>
                          <a
                            href={clinic.lineUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#112a23] hover:text-[#1b7a5a] transition-colors font-semibold"
                          >
                            {clinic.lineId || "@dr.chanon_clinic"}
                          </a>
                        </div>
                      </div>

                      {/* Facebook */}
                      <div className="flex items-start gap-3">
                        <Image
                          src="/images/facebook-128px.png"
                          alt="Facebook"
                          width={18}
                          height={18}
                          className="w-4 h-4 object-contain mt-1"
                        />
                        <div>
                          <span className="text-xs uppercase tracking-[0.16em] text-[#146348] font-semibold block">
                            Facebook Page
                          </span>
                          <a
                            href={clinic.facebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#112a23] hover:text-[#1b7a5a] transition-colors font-semibold"
                          >
                            คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Maps Link */}
                  <div className="pt-4 border-t border-[#cce2d8] mt-6">
                    <a
                      href={clinic.googleMapsQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-luxury text-[#146348] hover:text-[#1b7a5a] font-medium"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>เปิด Google Maps นำทางสู่คลินิก</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              </MotionDiv>

              {/* Right: Embedded Google Map with Smooth Fade Entrance */}
              <MotionDiv
                className="lg:col-span-6 h-full min-h-[420px] flex flex-col"
                effect="fade" duration={0.8} delay={0.1}
              >
                <div className="border border-[#cce2d8] p-2 bg-white h-full flex flex-col shadow-sm relative group">
                  <div className="relative w-full h-full min-h-[380px] lg:min-h-0 flex-1 overflow-hidden">
                    <iframe
                      src={clinic.googleMapsEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`แผนที่ ${clinic.nameTh}`}
                      className="w-full h-full min-h-[380px] lg:min-h-0 flex-1"
                    />
                    <a
                      href={clinic.googleMapsQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 bg-white/95 hover:bg-white text-[#112a23] hover:text-[#1b7a5a] text-xs font-semibold px-3 py-2 shadow-md border border-[#cce2d8] flex items-center gap-1.5 transition-all backdrop-blur-sm z-10 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#1b7a5a]" />
                      <span>เปิดใน Google Maps</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>
                </div>
              </MotionDiv>

            </div>

          </div>
        </div>
      </div>
    </MotionSection>
  );
}

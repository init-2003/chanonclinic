"use client";

import React from "react";
import Image from "next/image";
import { contactAndFooterData, siteMetadata } from "@/data/clinicData";
import { MotionDiv } from "@/components/ui/motion";

export default function Footer() {
  const quickLinks = [
    { name: "หน้าแรก", href: "#hero" },
    { name: "จุดเด่นคลินิก", href: "#why-us" },
    { name: "บริการตรวจรักษา", href: "#services" },
    { name: "แพทย์เฉพาะทาง", href: "#doctors" },
    { name: "แผนที่ & ติดต่อ", href: "#contact" },
  ];

  return (
    <footer className="bg-white text-[#112a23] border-t border-[#cce2d8] relative overflow-hidden">
      {/* Main Footer Grid */}
      <MotionDiv effect="fade" duration={0.55} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Identity (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0">
                <Image
                  src="/images/logo-non-bg.png"
                  alt={siteMetadata.organizationName}
                  width={44}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-xl sm:text-2xl text-[#112a23] font-normal leading-tight">
                  {siteMetadata.organizationName}
                </span>
                <span className="font-sans text-xs tracking-[0.16em] uppercase text-[#146348] font-semibold">
                  Orthopedic & Ultrasound Center
                </span>
              </div>
            </div>
            
            <p className="font-sans text-sm sm:text-base text-[#416156] leading-[1.7] max-w-md font-normal">
              {contactAndFooterData.brandDescriptionTh}
            </p>
          </div>

          {/* Column 2: Navigation Links (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#146348] font-semibold block">
              สารบัญเว็บไซต์
            </span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm sm:text-base text-[#416156] hover:text-[#112a23] transition-colors py-1 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Locations Summary (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#146348] font-semibold block">
              เวลาทำการ & ที่ตั้ง
            </span>
            <div className="space-y-2 text-sm sm:text-base font-sans text-[#416156] leading-[1.7]">
              <p>เวลาทำการ: จันทร์, พุธ - เสาร์ 17.30 - 20.00 น. | อาทิตย์ 10.00 - 12.00 น. (ปิดทุกวันอังคาร)</p>
              <p>ที่ตั้ง: เลขที่ 768/1 ถ.ชยางกูร (ตรงข้ามร้าน ฟ.ฟัน ราชเวช) ต.ในเมือง อ.เมือง จ.อุบลราชธานี 34000</p>
              <div className="pt-2 border-t border-[#cce2d8] text-[#146348] text-xs font-semibold">
                ศูนย์ตรวจคลื่นเสียงอัลตราซาวด์เฉพาะทางความละเอียดสูง
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-14 pt-6 border-t border-[#cce2d8] flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-sans text-[#416156] gap-3">
          <div>
            © 2026 {siteMetadata.organizationName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[#416156]/70 text-xs">
            <span>Ubon Ratchathani, Thailand</span>
            <span>•</span>
            <span className="text-[#146348] font-semibold">Clinical Standards</span>
          </div>
        </div>
      </MotionDiv>
    </footer>
  );
}

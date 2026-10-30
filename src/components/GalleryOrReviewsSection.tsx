"use client";

import React from "react";
import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";
import {
  testimonialsSectionData,
  portfolioSectionData,
  TestimonialItem,
} from "@/data/clinicData";

export default function GalleryOrReviewsSection() {
  return (
    <section id="reviews" className="bg-[#f2f7f4] py-20 md:py-28 border-t border-[#cce2d8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Columns 1-2: Architectural Margin with Roman Numeral V & Medical Green Spine */}
          <div className="hidden lg:block lg:col-span-2 relative pr-6 border-r border-[#1b7a5a] min-h-[650px]">
            <div className="sticky top-28">
              <span className="font-serif text-sm text-[#146348] tracking-[0.25em] font-normal block mb-2">
                SECTION V
              </span>
              <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-[#416156] block">
                REVIEWS
              </span>
            </div>
          </div>

          {/* Columns 3-12: Main Reviews Content */}
          <div className="col-span-1 lg:col-span-10 space-y-12">
            
            {/* Mobile Roman Numeral */}
            <div className="lg:hidden flex items-center gap-2">
              <span className="font-serif text-xs text-[#146348] tracking-[0.2em]">SECTION V</span>
              <span className="w-8 h-[1px] bg-[#1b7a5a]" />
            </div>

            {/* Section Header */}
            <div className="max-w-2xl space-y-3">
              <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#146348] font-semibold">
                Verified Patient Testimonials
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#112a23] font-normal tracking-tight">
                {testimonialsSectionData.sectionTitleTh}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#416156] leading-relaxed">
                เสียงตอบรับและความประทับใจจริงจากคนไข้ที่มาตรวจรักษาที่ คลินิกกระดูกและข้ออุบล
              </p>

              {/* Rating Summary Bar */}
              <div className="pt-2 flex items-center gap-4 text-xs font-sans text-[#416156]">
                <div className="flex items-center gap-1 text-[#1b7a5a]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-[#1b7a5a] text-[#1b7a5a]" />
                  ))}
                </div>
                <span className="font-serif text-sm font-medium text-[#112a23]">5.0 / 5.0</span>
                <span className="text-[#cce2d8]">|</span>
              </div>
            </div>

            {/* 8 Real Reviews Grid with Clean Square Framing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonialsSectionData.reviews.map((item: TestimonialItem) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#cce2d8] p-5 flex flex-col justify-between transition-colors"
                >
                  <div className="space-y-4">
                    {/* Visual Image Proof */}
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-[#e2eee7] border border-[#cce2d8]">
                      <Image
                        src={item.image}
                        alt={item.reviewerName}
                        fill
                        className="object-contain p-1"
                      />
                    </div>

                    {/* Review Rating & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5 text-[#1b7a5a]">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-3 h-3 fill-[#1b7a5a] text-[#1b7a5a]" />
                        ))}
                      </div>
                      <span className="font-sans text-[10px] text-[#146348] uppercase tracking-wider">
                        {item.reviewerBadgeTh}
                      </span>
                    </div>

                    {/* Reviewer Name */}
                    <h4 className="font-serif text-sm font-medium text-[#112a23]">
                      {item.reviewerName}
                    </h4>

                    {/* Testimonial Quote in Italic Garamond */}
                    <p className="font-serif italic text-xs text-[#416156] leading-relaxed line-clamp-4">
                      &ldquo;{item.reviewTextTh}&rdquo;
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#cce2d8] flex items-center justify-between text-[10px] font-sans text-[#146348] uppercase tracking-[0.1em]">
                    <span>Verified Patient</span>
                    <span className="text-[#416156]">Google</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Case Portfolio Banner (Deep Surgical Pine Accent) */}
            <div className="bg-[#0e3328] text-[#f2f7f4] border border-[#1f4f41] p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-[#6ee7b7] font-semibold">
                  Clinical Cases & Updates
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#f2f7f4] font-normal">
                  {portfolioSectionData.sectionTitleTh}
                </h3>
                <p className="font-sans text-xs text-[#a8cbbf] leading-relaxed">
                  ติดตามภาพผลงานการรักษา การผ่าตัดส่องกล้องข้อ และเคสดูแลรักษาต่อเนื่องในเพจ Facebook ของคลินิก
                </p>
              </div>

              <a
                href={portfolioSectionData.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-on-charcoal shrink-0"
              >
                <span>{portfolioSectionData.ctaLabelTh}</span>
                <ExternalLink className="w-3.5 h-3.5 ml-2" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

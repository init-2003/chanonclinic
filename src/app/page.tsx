import React from "react";
import Navbar from "@/components/Navbar";
import PreHeroCover from "@/components/PreHeroCover";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ScrollProgressBar } from "@/components/ui/MotionWrapper";
import ScrollRulerSpine from "@/components/ui/ScrollRulerSpine";
import { createClinicStructuredData, serializeJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f2f7f4]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createClinicStructuredData()) }}
      />
      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Right-Screen Precision Scroll Ruler & Section Gauge */}
      <ScrollRulerSpine />

      {/* 1. Sticky Navigation Bar */}
      <Navbar />



      {/* 2. Main Page Content */}
      <main id="clinic-content" className="flex-1">
        {/* Pre-Hero Showcase Cover: Click-to-Expand with Center Title */}
        <PreHeroCover />

        {/* Hero Section (Section 1) */}
        <HeroSection />

        {/* Highlights & Why Choose Us */}
        <HighlightsSection />

        {/* Ultrasound services */}
        <ServicesSection />

        {/* Orthopedic specialties */}
        <DoctorsSection />

        {/* Contact Hub & Google Maps */}
        <ContactSection />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}

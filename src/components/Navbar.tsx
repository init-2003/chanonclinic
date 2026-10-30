"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrollPageTo } from "@/lib/pageScroll";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Mobile Menu Staggered Physics Variants
const mobileMenuContainerVariants = {
  hidden: {
    opacity: 0,
    y: -12,
    scaleY: 0.97,
    transition: {
      duration: 0.22,
      ease: [0.32, 0.72, 0, 1] as const,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 28,
      mass: 0.7,
      staggerChildren: 0.04,
      delayChildren: 0.03,
    },
  },
};

const mobileMenuItemVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 420,
      damping: 26,
    },
  },
};

export default function Navbar() {
  const reduced = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const isClickScrollingRef = useRef(false);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navLinks = [
    { id: "hero", label: "หน้าแรก", href: "#hero" },
    { id: "why-us", label: "มาตรฐาน", href: "#why-us" },
    { id: "services", label: "บริการรักษา", href: "#services" },
    { id: "doctors", label: "แพทย์เฉพาะทาง", href: "#doctors" },
    { id: "contact", label: "ติดต่อเรา", href: "#contact" },
  ];

  // Dynamic Scroll Spy: Automatically update active tab when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrollingRef.current) {
        if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
        scrollEndTimerRef.current = setTimeout(() => {
          isClickScrollingRef.current = false;
          handleScroll();
        }, 180);
        return;
      }

      // Bottom of page check -> Contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveId("contact");
        return;
      }

      // The cover has no selected menu item; Home starts at Section I.
      const introduction = document.getElementById("hero");
      if (introduction && introduction.getBoundingClientRect().top > 80) {
        setActiveId("");
        return;
      }

      const scrollPos = window.scrollY + 140;
      const sections = [
        { id: "contact", el: document.getElementById("contact") },
        { id: "doctors", el: document.getElementById("doctors") },
        { id: "services", el: document.getElementById("services") },
        { id: "why-us", el: document.getElementById("why-us") },
        { id: "hero", el: document.getElementById("hero") },
      ];

      for (const sec of sections) {
        if (sec.el && scrollPos >= sec.el.getBoundingClientRect().top + window.scrollY) {
          setActiveId(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    setActiveId(id);
    setMobileMenuOpen(false);
    isClickScrollingRef.current = true;
    if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const top = targetElement.getBoundingClientRect().top + window.scrollY - 64;
      scrollPageTo({ top, behavior: reduced ? "instant" : "smooth" });
    }

    scrollEndTimerRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 180);
  };

  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b border-[#cce2d8] bg-[#f2f7f4]/95 backdrop-blur-md select-none transition-all">
      <div className="relative flex h-16 items-stretch justify-between w-full">
        {/* Left: Brand Icon & Horizontal Nav Items */}
        <div className="flex min-w-0 items-stretch">
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero", "hero")}
            className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 flex h-16 items-center gap-2.5 px-4 hover:opacity-85 sm:px-6 shrink-0 sm:mr-4 transition-opacity"
          >
            <Image
              src="/images/logo-non-bg.png"
              alt="คลินิกกระดูกและข้อ นพ.ชานนท์"
              width={36}
              height={36}
              className="h-9 w-auto object-contain"
              priority
            />
            {/* Tablet & Desktop: Complete Full Name */}
            <span className="hidden sm:inline font-bold text-sm md:text-[15px] lg:text-base text-[#112a23] whitespace-nowrap tracking-tight">
              คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา
            </span>
          </Link>

          {/* Desktop Navigation Links with Smooth Sliding Indicator */}
          <nav aria-label="Main Navigation" className="hidden min-w-0 items-stretch lg:flex">
            <ul className="flex h-full items-stretch">
              {navLinks.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id} className="flex items-stretch">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, item.id)}
                      className="group flex h-full items-center px-3 text-sm lg:text-[14.5px] font-medium whitespace-nowrap cursor-pointer"
                    >
                      <span
                        className={`relative flex items-center gap-1.5 px-3 py-1 transition-colors duration-150 ${isActive
                          ? "text-white font-semibold"
                          : "text-[#416156] hover:text-[#112a23]"
                          }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-active-pill"
                            className="absolute inset-0 bg-[#112a23] -z-10"
                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                          />
                        )}
                        {item.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Right: Flush Full-Height CTA Button "ปรึกษาเลย" (Hidden on mobile phones) */}
        <div className="flex shrink-0 items-stretch">
          <a
            href="https://line.me/R/ti/p/@dr.chanon_clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-none font-bold whitespace-nowrap duration-150 bg-[#112a23] text-white hover:bg-[#146348] text-sm sm:text-[15px] tracking-wide h-full px-6 sm:px-8 cursor-pointer"
          >
            แอดไลน์คลินิก
          </a>

          {/* Mobile Menu Button with Smooth Rotating Icon */}
          <div className="absolute left-0 top-0 flex h-16 items-stretch sm:static sm:h-auto lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="flex w-14 items-center justify-center text-[#112a23] hover:bg-[#112a23] hover:text-white transition-colors cursor-pointer"
            >
              <motion.div
                key={mobileMenuOpen ? "close-icon" : "menu-icon"}
                initial={{ rotate: mobileMenuOpen ? -90 : 90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Overlay - Fluid Spring & Staggered Cascading Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Dimmer: Clicking anywhere outside closes the menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-16 bg-black/40 backdrop-blur-[2px] z-40 lg:hidden"
            />

            {/* Floating Dropdown Panel */}
            <motion.div
              variants={mobileMenuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{ transformOrigin: "top" }}
              className="absolute top-full left-0 w-full lg:hidden border-b border-[#cce2d8] bg-[#f2f7f4] shadow-2xl overflow-hidden z-50"
            >
              <nav className="flex flex-col py-2.5">
                {navLinks.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <motion.a
                      variants={mobileMenuItemVariants}
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, item.id)}
                      className={`flex items-center justify-between px-6 py-3.5 text-sm font-semibold transition-colors duration-150 ${isActive
                        ? "bg-[#112a23] text-white"
                        : "text-[#112a23] hover:bg-[#e2eee7]"
                        }`}
                    >
                      <span>{item.label}</span>
                    </motion.a>
                  );
                })}
                <motion.div variants={mobileMenuItemVariants} className="p-4 border-t border-[#cce2d8] mt-1.5">
                  <a
                    href="https://line.me/R/ti/p/@dr.chanon_clinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center h-12 text-sm font-bold bg-[#112a23] text-white hover:bg-[#146348] transition-colors shadow-md active:scale-[0.98]"
                  >
                    แอดไลน์คลินิก
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

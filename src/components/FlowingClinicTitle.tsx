"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useReducedMotion } from "framer-motion";
import { MaskReveal } from "@/components/ui/motion";

const query = "(min-width: 1280px)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const desktopSnapshot = () => window.matchMedia(query).matches;
const serverSnapshot = () => false;
const clamp = (value: number) => Math.max(0, Math.min(1, value));
const ease = (value: number) => value < 0.5 ? 4 * value ** 3 : 1 - (-2 * value + 2) ** 3 / 2;
const segmenter = new Intl.Segmenter("th", { granularity: "grapheme" });
const titleLines = ["คลินิกกระดูกและข้อ", "นพ.ชานนท์ พญ.พัดชา"].map(line =>
  Array.from(segmenter.segment(line), part => part.segment)
);

export default function FlowingClinicTitle() {
  const anchor = useRef<HTMLHeadingElement>(null);
  const visual = useRef<HTMLDivElement>(null);
  const desktop = useSyncExternalStore(subscribe, desktopSnapshot, serverSnapshot);
  const reduced = useReducedMotion();
  const enabled = desktop && !reduced;

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    let disposed = false;
    const update = () => {
      const source = anchor.current;
      const title = visual.current;
      const intro = document.getElementById("hero");
      if (!source || !title || !intro) return;
      const box = source.getBoundingClientRect();
      const introTop = intro.getBoundingClientRect().top;
      const introY = introTop + window.scrollY;
      const progress = clamp(window.scrollY / Math.max(1, (introY - 64) * 0.42));
      const eased = ease(progress);
      // Match the incoming INTRODUCTION heading's shrink into the top history.
      const incoming = clamp((innerHeight * 0.15 + 200 - introTop) / 200);
      const endScale = 0.55 * (1 - 0.28 * incoming);
      const startY = box.top + window.scrollY;
      title.style.width = `${box.width}px`;
      const glyphs = Array.from(title.querySelectorAll<HTMLElement>("[data-title-glyph]"));
      let dockedBottom = 92;
      const stagger = 0.16;
      const span = 1 + (glyphs.length - 1) * stagger;
      glyphs.forEach((glyph, index) => {
        const line = glyph.parentElement!;
        const baseX = line.offsetLeft + glyph.offsetLeft;
        const baseY = line.offsetTop + glyph.offsetTop;
        // Trailing letters peel away first, just like the section headings.
        const phase = clamp(progress * span - (glyphs.length - 1 - index) * stagger);
        const travel = ease(phase);
        const scale = 1 + (endScale - 1) * travel;
        const lineAlignment = (box.width - line.offsetWidth) * 0.5;
        const endX = document.documentElement.clientWidth - 74 - (box.width - baseX - lineAlignment) * endScale;
        const endY = 92 + baseY * endScale;
        dockedBottom = Math.max(dockedBottom, endY + glyph.offsetHeight * endScale);
        const fromX = box.left + baseX;
        // Ride upward with the cover while waiting for this glyph's turn.
        // Keep the flight below the navbar and finish well before Section I arrives.
        const fromY = Math.max(92 + baseY * endScale, startY - window.scrollY + baseY);
        // The same 32px inward bow used by the section heading rail.
        const x = fromX + (endX - fromX) * travel - 64 * travel * (1 - travel);
        const y = fromY + (endY - fromY) * travel;
        const contrast = clamp((y + glyph.offsetHeight * scale - introTop + 24) / 80);
        const channel = (light: number, dark: number) => Math.round(light + (dark - light) * contrast);
        glyph.style.transform = `translate3d(${x - baseX}px, ${y - baseY}px, 0) rotate(${-28 * Math.sin(Math.PI * travel)}deg) scale(${scale})`;
        glyph.style.color = `rgb(${channel(255, 65)}, ${channel(255, 97)}, ${channel(255, 86)})`;
        glyph.style.textShadow = contrast < 1 ? `0 2px 12px rgba(0,0,0,${0.65 * (1 - contrast)})` : "none";
        glyph.dataset.progress = String(phase);
      });
      title.style.setProperty("--clinic-stack-offset", `${72 * eased}px`);
      title.style.setProperty("--clinic-title-bottom", progress === 1 ? String(dockedBottom) : "0");
      title.style.visibility = "visible";
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    if (anchor.current) observer.observe(anchor.current);
    document.fonts.ready.then(() => { if (!disposed) schedule(); });
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [enabled]);

  return <>
    <h1 ref={anchor} style={{ opacity: enabled ? 0 : undefined }} className="font-serif text-2xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight leading-[1.25] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
      <MaskReveal trigger="mount" delay={0.15}><span className="block mb-1 sm:mb-2">คลินิกกระดูกและข้อ</span></MaskReveal>
      <MaskReveal trigger="mount" delay={0.28}><span><span className="inline-block whitespace-nowrap text-[#e2eee7]">นพ.ชานนท์</span>{" "}<span className="inline-block whitespace-nowrap text-[#e2eee7]">พญ.พัดชา</span></span></MaskReveal>
    </h1>
    {enabled && createPortal(<div
      id="flowing-clinic-title" ref={visual} aria-hidden="true"
      className="fixed left-0 top-0 z-[41] pointer-events-none select-none font-serif text-5xl font-bold tracking-tight leading-[1.25] text-center origin-top-left"
      style={{ visibility: "hidden" }}
    >
      {titleLines.map((line, lineIndex) => <span key={lineIndex} className={`relative block w-max mx-auto whitespace-nowrap ${lineIndex === 0 ? "mb-2" : ""}`}>
        {line.map((glyph, index) => <span key={index} data-title-glyph className="inline-block whitespace-pre origin-top-left will-change-transform">{glyph}</span>)}
      </span>)}
    </div>, document.body)}
  </>;
}

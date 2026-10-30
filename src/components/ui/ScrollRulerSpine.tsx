"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { useReducedMotion, useScroll, useSpring } from "framer-motion";
import { clinicPhotos } from "@/data/clinicPhotos";
import { scrollPageTo } from "@/lib/pageScroll";

interface SectionDef {
  id: string;
  num: string;
  label: string;
  image?: string;
}

const SECTIONS: SectionDef[] = [
  { id: "hero", num: "01", label: "INTRODUCTION", image: clinicPhotos.receptionStaff.src },
  { id: "why-us", num: "02", label: "STANDARDS", image: clinicPhotos.ultrasoundEquipment.src },
  { id: "services", num: "03", label: "DIAGNOSTICS", image: clinicPhotos.procedureRoom.src },
  { id: "doctors", num: "04", label: "SPECIALISTS", image: clinicPhotos.consultationRoom.src },
  { id: "contact", num: "05", label: "CONTACT", image: clinicPhotos.receptionWelcome.src },
];

/* =============================================================================
   Exact ArtCraft Constants & Physics Parameters (from getartcraft.com bundle)
   ============================================================================= */
const NAV_H = 64; // exact h-16 (64px) navbar height
const RAIL_W = 60; // exact ArtCraft rail width (px)
const TEXT_PAD = 14; // padding between rail and words (px)
const HEADING_PX = 28; // smaller active heading keeps more of the content visible
const RIDING_PX = 18; // vertical riding word font size (px)
const QUEUE_PX = 16; // reference compact queue & history size
const TOP_PAD = 28; // gap from nav bottom to top stack
const CURRENT_GAP = 26; // gap between compact top stack and active heading
const QUEUE_SLOT = 22; // spacing between stacked lines
const QUEUE_PAD = 36; // bottom margin for bottom queue
const FLIP_ZONE = 200; // scroll distance (px) over which top flip plays out
const DETACH_ZONE = 240; // scroll distance (px) over which bottom detach plays out
const STAGGER = 0.16; // per-letter stagger delay fraction (exact ArtCraft value)
const ARC = 32; // quadratic bezier inward bow (px)
const QUEUE_ALPHA = 0.65; // keep compact navigation readable over the cover image
const THRESHOLD_VH_PCT = 0.15; // 15% of vh from top where flip begins
const HOVER_GROWTH = 0.06;
const HOVER_ENTER_RATE = 12;
const HOVER_LEAVE_RATE = 9;

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function rulerMap(vh: number, edgePad: number = 16) {
  const base = NAV_H + edgePad;
  const span = Math.max(1, vh - NAV_H - 2 * edgePad);
  return {
    base,
    span,
    drift: (f: number) => base - f * (NAV_H + 2 * edgePad),
  };
}

interface LetterMetrics {
  adv: number[]; // advance of each character (normalized to 1em)
  cum: number[]; // cumulative advance of each character
  total: number; // total word width in em
}

interface Pose {
  x: number;
  y: number;
  rot: number;
  scale: number;
  alpha: number;
}

export default function ScrollRulerSpine() {
  const reduced = useReducedMotion() === true;
  const [docH, setDocH] = useState(0);
  const [vh, setVh] = useState(0);
  const [vw, setVw] = useState(0);
  const [digits, setDigits] = useState<[number, number, number]>([0, 0, 0]);
  const [isDragging, setIsDragging] = useState(false);
  const [isHoveringRail, setIsHoveringRail] = useState(false);
  const [metrics, setMetrics] = useState<Record<string, LetterMetrics> | null>(null);

  const railRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<Record<string, (HTMLSpanElement | null)[]>>({});
  const rafRef = useRef<number>(0);

  // Zoom / Flow Refs (Physics lerp 60fps)
  const zoomPRef = useRef(0);
  const isHoveringRailRef = useRef(false);
  const isDraggingRef = useRef(false);
  const hoveredSectionRef = useRef<string | null>(null);
  const hoverProgressRef = useRef<Record<string, number>>({});
  const hoverLeaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ticksContainerRef = useRef<HTMLDivElement>(null);
  const tickRowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bracketRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<HTMLDivElement>(null);
  const ghostLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => () => {
    if (hoverLeaveTimerRef.current !== null) clearTimeout(hoverLeaveTimerRef.current);
  }, []);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    mass: 0.5,
  });

  // 1. Measure character advances using Canvas
  useEffect(() => {
    let cancelled = false;
    const measure = () => {
      if (!railRef.current) return;
      const measureGlyph = document.createElement("span");
      measureGlyph.style.cssText = 'position:absolute;visibility:hidden;white-space:pre;font-size:100px;line-height:1;font-weight:620;font-variation-settings:"wdth" 118,"wght" 620';
      railRef.current.appendChild(measureGlyph);

      const result: Record<string, LetterMetrics> = {};
      SECTIONS.forEach((sec) => {
        const adv: number[] = [];
        const cum: number[] = [];
        let total = 0;
        for (const ch of sec.label) {
          measureGlyph.textContent = ch;
          const w = (measureGlyph.getBoundingClientRect().width + 10) / 100;
          adv.push(w);
          cum.push(total);
          total += w;
        }
        result[sec.label] = { adv, cum, total };
      });

      measureGlyph.remove();
      if (!cancelled) setMetrics(result);
    };

    measure();
    document.fonts?.ready.then(measure).catch(() => { });
    return () => {
      cancelled = true;
    };
  }, []);

  // 2. Geometry & Scroll Updates
  const updateGeometry = useCallback(() => {
    if (typeof window === "undefined") return;
    setDocH(document.documentElement.scrollHeight);
    setVh(window.innerHeight);
    setVw(document.documentElement.clientWidth);
  }, []);

  useEffect(() => {
    const initialFrame = requestAnimationFrame(updateGeometry);
    window.addEventListener("resize", updateGeometry);
    const resizeObserver = new ResizeObserver(updateGeometry);
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(initialFrame);
      window.removeEventListener("resize", updateGeometry);
      resizeObserver.disconnect();
    };
  }, [updateGeometry]);

  // 3. Exact ArtCraft Animation Loop: Updates every single letter's transform
  const updateLetterPoses = useCallback(
    (dt: number = 0.016) => {
      if (!metrics || !docH || !vh || !vw) return;

      // 0. Update Ruler Zoom Physics (60-120fps lerp)
      const zoomTarget = isHoveringRailRef.current || isDraggingRef.current ? 1.0 : 0.0;
      zoomPRef.current = reduced ? zoomTarget : zoomPRef.current + (zoomTarget - zoomPRef.current) * (1 - Math.exp(-12 * dt));
      if (zoomTarget === 0 && zoomPRef.current < 0.001) zoomPRef.current = 0;
      if (zoomTarget === 1 && zoomPRef.current > 0.999) zoomPRef.current = 1;
      const W = easeInOutCubic(zoomPRef.current);

      const currentY = window.scrollY;
      const totalDocScroll = Math.max(1, docH - vh);
      const scrollRatio = clamp01(currentY / totalDocScroll);

      // Ruler coordinate map:
      const m = rulerMap(vh, 16);
      const g = m.drift(scrollRatio);

      // Hide ONLY the green needle indicator when at scroll 0 (resting at top of page)
      const isAtTop = currentY <= 8;
      const needleOpacity = isAtTop && W < 0.05 && !isHoveringRailRef.current ? "0" : "1";

      // 1. Move Ticks Container with scroll (Tape measure in resting mode)
      if (ticksContainerRef.current) {
        ticksContainerRef.current.style.transform = `translate3d(0, ${-currentY + g}px, 0)`;
      }

      // 2. Animate every tick between tape-measure position i and compressed position l:
      for (let n = 0; n <= 100; n++) {
        const docY = (n / 100) * docH;
        const i = docY - currentY + g; // resting on-screen Y
        const l = m.base + (n / 100) * m.span; // zoomed rail Y
        const rowEl = tickRowRefs.current[n];
        if (rowEl) {
          rowEl.style.transform = W > 0 ? `translate3d(0, ${W * (l - i)}px, 0)` : "";
        }
      }

      // 3. Update Needle position (stays perfectly locked to percentage in both modes)
      const needleY = m.base + scrollRatio * m.span;
      if (needleRef.current) {
        needleRef.current.style.transform = `translate3d(0, ${needleY}px, 0)`;
        needleRef.current.style.opacity = needleOpacity;
      }

      // 4. Update Viewport Bracket (Active and visible on hover)
      if (bracketRef.current) {
        const viewportTopPx = m.base + (currentY / docH) * m.span;
        const viewportHeightPx = (vh / docH) * m.span;
        bracketRef.current.style.transform = `translate3d(0, ${viewportTopPx}px, 0)`;
        bracketRef.current.style.height = `${viewportHeightPx}px`;
        bracketRef.current.style.opacity = String(W);
      }

      const D = HEADING_PX;
      const ridingScale = RIDING_PX / D;
      const queueScale = QUEUE_PX / D;

      const L = THRESHOLD_VH_PCT * vh; // flip threshold line
      const clinicTitle = document.getElementById("flowing-clinic-title");
      const titleOffset = Number.parseFloat(clinicTitle?.style.getPropertyValue("--clinic-stack-offset") || "0");
      const titleBottom = Number.parseFloat(clinicTitle?.style.getPropertyValue("--clinic-title-bottom") || "0");
      const titleClearance = titleBottom > 0 ? titleBottom + 24 : 0;
      const A = Math.max(NAV_H + TOP_PAD + titleOffset, titleClearance);
      const I = vh - QUEUE_PAD;

      // Calculate section scroll anchors and flip progress
      const sectionStates = SECTIONS.map((sec) => {
        const el = document.getElementById(sec.id);
        const anchor = el ? el.getBoundingClientRect().top + currentY : 0;
        const met = metrics[sec.label];
        const rideLen = (met?.total ?? 0) * D * ridingScale;
        const o = anchor - currentY; // on-screen top offset

        // Top flip progress: 0 = on rail, 1 = landed in top pile
        const flipP = clamp01((L + FLIP_ZONE - o) / FLIP_ZONE);

        return {
          id: sec.id,
          label: sec.label,
          anchor,
          o,
          rideLen,
          flipP,
          detachP: 0,
          yQueue: I,
        };
      });

      // Compute bottom queue slots and detach progress (includes all 5 sections):
      let queuedCount = 0;
      for (let i = sectionStates.length - 1; i >= 0; i--) {
        const s = sectionStates[i];
        s.yQueue = I - QUEUE_SLOT * queuedCount;
        if (currentY <= 30 && i === 0) {
          // While at the top on PreHeroCover, INTRODUCTION rests neatly in its slot
          s.detachP = 0;
        } else {
          s.detachP = clamp01((s.yQueue + DETACH_ZONE - (s.o + s.rideLen)) / DETACH_ZONE);
        }
        queuedCount += 1 - s.detachP;
      }

      // Compute target ruler position L_i for each section when zoomed:
      const sectionZoomPositions: Record<string, number> = {};
      let nextMapRow = Math.max(NAV_H + TOP_PAD, titleClearance);
      sectionStates.forEach((sec) => {
        const ratio = clamp01(sec.anchor / totalDocScroll);
        const L_i = Math.max(m.base + ratio * m.span, nextMapRow);
        sectionZoomPositions[sec.id] = L_i;
        nextMapRow = L_i + QUEUE_SLOT + 4;
      });

      // Y: Count of fully landed sections at the top (flipP >= 1)
      // U: Flip progress of incoming section that is currently flipping (0 < flipP < 1)
      let Y = 0;
      let U = 0;
      for (const s of sectionStates) {
        if (s.flipP >= 1) {
          Y++;
        } else if (s.flipP > 0) {
          U += s.flipP;
        }
      }

      // Pose generator B = Horizontal row (used for top stack & bottom queue)
      const makeB = (
        m: LetterMetrics,
        letterIdx: number,
        y: number,
        scale: number,
        alpha: number
      ): Pose => {
        const s = (m.cum[letterIdx] + m.adv[letterIdx] / 2) * D * scale;
        const a = RAIL_W + TEXT_PAD + (m.total * D * scale - s);
        return {
          x: vw - a,
          y,
          rot: 0,
          scale,
          alpha,
        };
      };

      // Pose generator Z = Vertical riding position along the rail (rot = -90deg)
      // Positioned at vw - 40 to sit crisply to the left of tick numbers on top of the rail
      const makeZ = (
        m: LetterMetrics,
        letterIdx: number,
        yBase: number,
        scale: number = ridingScale,
        alpha: number = 0.95
      ): Pose => {
        return {
          x: vw - 40,
          y: yBase + (m.total - m.cum[letterIdx] - m.adv[letterIdx] / 2) * D * scale,
          rot: -90,
          scale,
          alpha,
        };
      };

      // Now interpolate every letter of every section
      sectionStates.forEach((sec, secIdx) => {
        const m = metrics[sec.label];
        const spans = letterRefs.current[sec.id];
        if (!m || !spans) return;

        const numLetters = m.adv.length;
        const { o, rideLen, flipP, detachP, yQueue } = sec;
        const isHovered = hoveredSectionRef.current === sec.id;
        const hoverTarget = isHovered ? 1 : 0;
        const previousHover = hoverProgressRef.current[sec.id] ?? 0;
        const hoverRate = isHovered ? HOVER_ENTER_RATE : HOVER_LEAVE_RATE;
        const nextHover = reduced
          ? hoverTarget
          : previousHover + (hoverTarget - previousHover) * (1 - Math.exp(-hoverRate * dt));
        const hoverProgress = Math.abs(hoverTarget - nextHover) < 0.001 ? hoverTarget : nextHover;
        hoverProgressRef.current[sec.id] = hoverProgress;
        const hoverScale = reduced ? 1 : 1 + HOVER_GROWTH * hoverProgress;

        let t = 0;
        let startPoseFn: (chIdx: number) => Pose;
        let endPoseFn: (chIdx: number) => Pose;
        let isFlipping = false;

        if (flipP > 0) {
          // -----------------------------------------------------------------
          // STATE 1: TOP FLIP (Vertical Rail -> Top Horizontal Stack)
          // -----------------------------------------------------------------
          t = flipP;
          isFlipping = true;
          startPoseFn = (chIdx) => makeZ(m, chIdx, o, ridingScale, 0.95);

          if (flipP >= 1) {
            // Landed in top stack
            const tShrink = secIdx === Y - 1 ? U : 1;
            const topY = A + secIdx * QUEUE_SLOT + CURRENT_GAP * (1 - tShrink);
            const sScale = 1 - (1 - queueScale) * tShrink;
            const sAlpha = 1 - (1 - QUEUE_ALPHA) * tShrink;
            endPoseFn = (chIdx) => makeB(m, chIdx, topY, sScale, sAlpha);
          } else {
            // Incoming section transitioning into active top heading
            const topY = A + secIdx * QUEUE_SLOT + CURRENT_GAP;
            endPoseFn = (chIdx) => makeB(m, chIdx, topY, 1.0, 1.0);
          }
        } else if (detachP > 0 && detachP < 1) {
          // -----------------------------------------------------------------
          // STATE 2: BOTTOM DETACH (Bottom Horizontal Queue -> Vertical Rail)
          // -----------------------------------------------------------------
          t = detachP;
          isFlipping = true;
          startPoseFn = (chIdx) => makeB(m, chIdx, yQueue, queueScale, QUEUE_ALPHA);
          endPoseFn = (chIdx) => makeZ(m, chIdx, yQueue - rideLen, ridingScale, 0.95);
        } else if (detachP >= 1) {
          // -----------------------------------------------------------------
          // STATE 3: RESTING VERTICAL ON RAIL (Riding alongside section)
          // -----------------------------------------------------------------
          t = 0;
          isFlipping = false;
          startPoseFn = (chIdx) => makeZ(m, chIdx, o, ridingScale, 0.95);
          endPoseFn = startPoseFn;
        } else {
          // -----------------------------------------------------------------
          // STATE 4: RESTING IN BOTTOM QUEUE (Horizontal rows at bottom right)
          // -----------------------------------------------------------------
          t = 0;
          isFlipping = false;
          startPoseFn = (chIdx) => makeB(m, chIdx, yQueue, queueScale, QUEUE_ALPHA);
          endPoseFn = startPoseFn;
        }

        // Per-letter staggered interpolation along quadratic Bezier curve
        const T = STAGGER;
        const O = 1 + (numLetters - 1) * T;

        for (let i = 0; i < numLetters; i++) {
          const span = spans[i];
          if (!span) continue;

          // In transitions, letters peel off from end to start (numLetters - 1 - i)
          const letterOrder = isFlipping ? numLetters - 1 - i : i;
          const letterProgress = clamp01(t * O - letterOrder * T);
          const d = reduced ? (letterProgress >= 0.5 ? 1 : 0) : easeInOutCubic(letterProgress);

          const h = startPoseFn(i);
          const target = endPoseFn(i);

          // Quadratic Bezier midpoint: bows leftward toward page content
          const g = (h.x + target.x) / 2 - ARC;
          const v = (h.y + target.y) / 2;

          const b = 1 - d;
          let x = b * b * h.x + 2 * b * d * g + d * d * target.x;
          let y = b * b * h.y + 2 * b * d * v + d * d * target.y;
          let rot = h.rot + (target.rot - h.rot) * d;
          let scale = h.scale + (target.scale - h.scale) * d;
          let alpha = h.alpha + (target.alpha - h.alpha) * d;

          // ZOOM / FLOW: When mouse hovers on ruler (W > 0), all headings flow to section anchor L_i
          if (W > 0) {
            const L_i = sectionZoomPositions[sec.id] ?? y;
            const zoomPose = makeB(m, i, L_i, queueScale, 1.0);
            x += (zoomPose.x - x) * W;
            y += (zoomPose.y - y) * W;
            rot = rot * (1 - W); // smoothly straightens to 0deg (horizontal!)
            scale += (zoomPose.scale - scale) * W;
            alpha += (zoomPose.alpha - alpha) * W;
          }

          // Enlarge the whole word around its trailing edge, including the spaces
          // between glyphs. Keep this in the RAF loop so it composes with scrolling.
          const baselineOffset = (m.cum[i] + m.adv[i] / 2 - m.total) * D * scale;
          const angle = rot * Math.PI / 180;
          x += Math.cos(angle) * baselineOffset * (hoverScale - 1);
          y += Math.sin(angle) * baselineOffset * (hoverScale - 1);
          scale *= hoverScale;
          alpha += (1 - alpha) * hoverProgress;

          // Incoming and zoomed letters must clear the clinic's two-line title,
          // including their height and the small hover enlargement.
          if (titleBottom > 0 && x < vw - RAIL_W - TEXT_PAD + 8) {
            y = Math.max(y, titleBottom + 16 + D * scale * 0.5);
          }

          span.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`;
          span.style.opacity = String(alpha);

          // Dynamic adaptive contrast: Crisp white over dark PreHeroCover, smooth transition to dark slate over light sections
          const heroTop = sectionStates[0]?.o ?? vh;
          const blend = clamp01((heroTop - y) / 100);

          if (W > 0.05) {
            span.style.color = blend > 0.4 ? "#ffffff" : "#0f172a";
            span.style.fontWeight = "900";
            span.style.letterSpacing = "-0.01em";
            span.style.textShadow = blend > 0.4 ? "0 1px 6px rgba(0,0,0,0.7)" : "none";
          } else if (d > 0.05 && d < 0.95) {
            // Mid-flight transition along the Bezier curve (Clinical mint / green accent)
            span.style.color = blend > 0.4 ? "#6ee7b7" : "#1b7a5a";
            span.style.fontWeight = "800";
            span.style.letterSpacing = "0";
            span.style.textShadow = blend > 0.4 ? "0 1px 6px rgba(0,0,0,0.6)" : "none";
          } else if (flipP >= 1) {
            // In the top stack:
            const tShrink = secIdx === Y - 1 ? U : 1;
            if (tShrink < 0.05) {
              // Active prominent heading (scale 1.0, bold black like COMMUNITY)
              span.style.color = "#000000";
              span.style.fontWeight = "900";
              span.style.letterSpacing = "-0.02em";
              span.style.textShadow = "none";
            } else if (tShrink >= 0.95) {
              // Fully shrunk into top history stack (scale queueScale, muted slate)
              span.style.color = "#8c9199";
              span.style.fontWeight = "700";
              span.style.letterSpacing = "0.03em";
              span.style.textShadow = "none";
            } else {
              // Smoothly shrinking down while incoming section letters peel and land!
              const r = Math.round(140 * tShrink);
              const g = Math.round(145 * tShrink);
              const b = Math.round(153 * tShrink);
              span.style.color = `rgb(${r}, ${g}, ${b})`;
              span.style.fontWeight = tShrink < 0.5 ? "900" : "700";
              span.style.letterSpacing = `${-0.02 + 0.05 * tShrink}em`;
              span.style.textShadow = "none";
            }
          } else if (detachP >= 1) {
            // Riding vertical along the rail (Pure white on PreHeroCover, dark slate on light sections)
            const r = Math.round(71 + (255 - 71) * blend);
            const g = Math.round(85 + (255 - 85) * blend);
            const b = Math.round(105 + (255 - 105) * blend);
            span.style.color = `rgb(${r}, ${g}, ${b})`;
            span.style.fontWeight = "800";
            span.style.letterSpacing = "0.06em";
            span.style.textShadow = blend > 0.05 ? `0 1px 6px rgba(0, 0, 0, ${0.6 * blend})` : "none";
          } else {
            // Waiting in bottom queue (Pure crisp white on PreHeroCover, dark slate on light sections)
            const r = Math.round(82 + (255 - 82) * blend);
            const g = Math.round(82 + (255 - 82) * blend);
            const b = Math.round(91 + (255 - 91) * blend);
            span.style.color = `rgb(${r}, ${g}, ${b})`;
            span.style.fontWeight = "700";
            span.style.letterSpacing = "0.03em";
            span.style.textShadow = blend > 0.05 ? `0 1px 6px rgba(0, 0, 0, ${0.7 * blend})` : "none";
          }

          // Fade emphasis with the same progress instead of snapping color and
          // spacing as the pointer enters or leaves a letter.
          if (hoverProgress > 0) {
            const baseChannels = span.style.color.match(/\d+(?:\.\d+)?/g)?.map(Number);
            const hoverChannel = blend > 0.4 ? 255 : 0;
            if (baseChannels?.length === 3) {
              const channels = baseChannels.map(channel => Math.round(channel + (hoverChannel - channel) * hoverProgress));
              span.style.color = `rgb(${channels.join(", ")})`;
            }
            const baseWeight = Number(span.style.fontWeight);
            span.style.fontWeight = String(Math.round(baseWeight + (900 - baseWeight) * hoverProgress));
            const baseSpacing = parseFloat(span.style.letterSpacing) || 0;
            span.style.letterSpacing = `${baseSpacing + (-0.01 - baseSpacing) * hoverProgress}em`;
            if (blend > 0.4) {
              span.style.textShadow = `0 2px 10px rgba(0,0,0,${0.85 * hoverProgress})`;
            }
          }
          // Keep the measured Archivo variable-font geometry stable while moving.
          span.style.fontWeight = "620";
          span.style.letterSpacing = "0";
          span.style.textShadow = "none";
        }
      });
    },
    [metrics, docH, vh, vw, reduced]
  );

  // Run animation loop via requestAnimationFrame with delta-time
  useEffect(() => {
    // The ruler is hidden below xl; avoid running an invisible animation loop.
    if (vw < 1024) return;
    if (reduced) {
      const update = () => updateLetterPoses(1);
      update();
      window.addEventListener("scroll", update, { passive: true });
      return () => window.removeEventListener("scroll", update);
    }
    let lastTime = performance.now();
    const onFrame = (now: number) => {
      const dt = Math.min(0.1, (now - lastTime) / 1000) || 0.016;
      lastTime = now;
      updateLetterPoses(dt);
      rafRef.current = requestAnimationFrame(onFrame);
    };
    rafRef.current = requestAnimationFrame(onFrame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [updateLetterPoses, reduced, vw, isHoveringRail, isDragging]);

  // Odometer digits
  useEffect(() => {
    const unsub = (reduced ? scrollYProgress : smoothProgress).on("change", (latest) => {
      const clamped = Math.max(0, Math.min(1, latest));
      const str = Math.round(clamped * 100).toString().padStart(3, "0");
      setDigits([parseInt(str[0], 10), parseInt(str[1], 10), parseInt(str[2], 10)]);
    });
    return () => unsub();
  }, [smoothProgress, scrollYProgress, reduced]);

  // Ruler Scrubbing
  const scrollToClientY = useCallback(
    (clientY: number, smooth: boolean = true) => {
      if (!docH || !vh) return;
      const m = rulerMap(vh, 16);
      const fraction = clamp01((clientY - m.base) / m.span);
      const targetScroll = fraction * Math.max(1, docH - vh);
      scrollPageTo({ top: targetScroll, behavior: smooth && !reduced ? "smooth" : "instant" });
    },
    [docH, vh, reduced]
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    isDraggingRef.current = true;
    if (ghostLineRef.current) {
      ghostLineRef.current.style.opacity = "0";
    }
    scrollToClientY(e.clientY, false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const y = e.clientY;
    if (ghostLineRef.current) {
      ghostLineRef.current.style.transform = `translate3d(0, ${y}px, 0) translateY(-50%)`;
      if (!isDraggingRef.current) {
        ghostLineRef.current.style.opacity = "1";
      }
    }
    if (isDraggingRef.current) scrollToClientY(y, false);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    isDraggingRef.current = false;
    if (ghostLineRef.current && isHoveringRailRef.current) {
      ghostLineRef.current.style.opacity = "1";
    }
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch { }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_H;
    scrollPageTo({ top, behavior: reduced ? "instant" : "smooth" });
  };

  // Exact ArtCraft Ruler Ticks: 0 to 100 with every 1% tick and major numbers every 5%
  const ticks = Array.from({ length: 101 }, (_, i) => ({
    pct: i,
    isMajor: i % 5 === 0,
    isNumbered: i % 5 === 0,
  }));

  const flowReady = !!metrics;

  return (
    <aside
      aria-label="Section navigation and page position"
      className="hidden lg:block fixed inset-0 z-40 select-none pointer-events-none"
      style={{ fontFamily: "var(--font-ruler), sans-serif", fontVariationSettings: '"wdth" 118, "wght" 620' }}
    >


      {/* =========================================================================
          1. ARTCRAFT PRECISION RULER RAIL (Far Right Edge)
          100% Transparent - tape measure in resting, compresses on hover
          ========================================================================= */}
      <div
        ref={railRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => {
          setIsHoveringRail(true);
          isHoveringRailRef.current = true;
          if (ghostLineRef.current && !isDraggingRef.current) {
            ghostLineRef.current.style.opacity = "1";
          }
        }}
        onMouseLeave={() => {
          setIsHoveringRail(false);
          isHoveringRailRef.current = false;
          if (ghostLineRef.current) {
            ghostLineRef.current.style.opacity = "0";
          }
        }}
        role="scrollbar"
        aria-label="Page position"
        aria-controls="clinic-content"
        aria-orientation="vertical"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={digits[0] * 100 + digits[1] * 10 + digits[2]}
        tabIndex={0}
        onKeyDown={(event) => {
          const keys: Record<string, number> = { ArrowDown: 80, ArrowUp: -80, PageDown: vh * 0.8, PageUp: -vh * 0.8 };
          if (event.key === "Home" || event.key === "End" || event.key in keys) {
            event.preventDefault();
            scrollPageTo({ top: event.key === "Home" ? 0 : event.key === "End" ? docH - vh : window.scrollY + keys[event.key], behavior: reduced ? "instant" : "smooth" });
          }
        }}
        className="pointer-events-auto absolute right-0 top-0 bottom-0 w-[60px] touch-none cursor-crosshair overflow-hidden bg-transparent focus-visible:outline focus-visible:outline-[#1b7a5a]"
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ backdropFilter: "blur(9px)", backgroundColor: "rgba(242,247,244,0.55)", maskImage: "linear-gradient(to left, black 40%, transparent 100%)" }} />
        {/* Viewport Bracket (Active and visible on hover/scrub like Image 2) */}
        <div
          ref={bracketRef}
          className="absolute inset-x-0 bg-black/[0.04] border-y border-black/[0.18] pointer-events-none transition-all duration-75"
          style={{
            top: 0,
            height: 0,
            opacity: 0,
          }}
        />

        {/* Ticks Container: Tape-measure scrolling in resting mode, compresses to rail when hovering */}
        <div
          ref={ticksContainerRef}
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{ height: `${docH}px` }}
        >
          {ticks.map((t, idx) => (
            <div
              key={t.pct}
              ref={(el) => {
                tickRowRefs.current[idx] = el;
              }}
              className="absolute inset-x-0"
              style={{ top: `${(t.pct / 100) * docH}px`, height: 0 }}
            >
              <div className="absolute right-0 flex items-center justify-end w-full -translate-y-1/2">
                {t.isNumbered && (
                  <span className="font-mono text-[9px] font-medium tracking-tight text-[#71717a] mr-2 leading-none select-none">
                    {t.pct}
                  </span>
                )}
                <span
                  className={`block ${t.isMajor
                    ? "w-5 h-px bg-[#416156]/80"
                    : "w-2.5 h-px bg-[#416156]/40"
                    }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bold ghost scrub line extending leftward (Instant 0ms hardware transform) */}
        <div
          ref={ghostLineRef}
          className="absolute pointer-events-none z-30 opacity-0 transition-opacity duration-100"
          style={{
            top: 0,
            right: 0,
            width: "60px",
            transform: "translate3d(0, 0, 0) translateY(-50%)",
            willChange: "transform",
          }}
        >
          <div className="w-full h-px bg-[#112a23]" />
        </div>

        {/* Needle + rolling odometer (System clinical green accent indicator) */}
        <div
          ref={needleRef}
          className="absolute inset-x-0 pointer-events-none -translate-y-1/2 transition-opacity duration-300"
          style={{ top: 0, opacity: 0 }}
        >
          <div className="w-full h-px bg-[#1b7a5a] shadow-[0_0_6px_rgba(27,122,90,0.35)]" />
          <div className="absolute right-2 top-1 flex items-center gap-[0.5px] text-[#146348] text-[9px] font-mono font-bold tracking-tight select-none">
            {digits.map((d, col) => (
              <div key={col} className="h-[1.15em] overflow-hidden leading-[1.15em] inline-block">
                <div
                  className="transition-transform duration-200 ease-out"
                  style={{ transform: `translateY(-${d * 1.15}em)` }}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <div key={n} className="h-[1.15em] leading-[1.15em] text-center">
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <span className="text-[8px] ml-[1px] opacity-90">%</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. PER-LETTER FLOWING LETTERS (Rendered ON TOP of rail, crystal clear!)
          ========================================================================= */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{ visibility: flowReady ? "visible" : "hidden" }}
      >
        {SECTIONS.map((sec) => {
          return sec.label.split("").map((ch, i) => (
            <span
              key={`${sec.id}-${i}`}
              ref={(el) => {
                if (!letterRefs.current[sec.id]) letterRefs.current[sec.id] = [];
                letterRefs.current[sec.id][i] = el;
              }}
              onClick={() => scrollToSection(sec.id)}
              onMouseEnter={() => {
                if (hoverLeaveTimerRef.current !== null) {
                  clearTimeout(hoverLeaveTimerRef.current);
                  hoverLeaveTimerRef.current = null;
                }
                hoveredSectionRef.current = sec.id;
                if (reduced) updateLetterPoses(0);
              }}
              onMouseLeave={() => {
                // Bridge the small gaps between individual letter hit areas.
                hoverLeaveTimerRef.current = setTimeout(() => {
                  if (hoveredSectionRef.current === sec.id) {
                    hoveredSectionRef.current = null;
                    if (reduced) updateLetterPoses(0);
                  }
                  hoverLeaveTimerRef.current = null;
                }, reduced ? 0 : 60);
              }}
              className="pointer-events-auto absolute left-0 top-0 block cursor-pointer uppercase whitespace-pre leading-none select-none py-2"
              style={{
                fontSize: HEADING_PX,
                letterSpacing: 0,
                willChange: "transform, opacity",
              }}
            >
              {ch}
            </span>
          ));
        })}
      </div>
    </aside>
  );
}

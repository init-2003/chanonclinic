"use client";

import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ease, dur, spring, viewport as defaultViewport } from "./tokens";
import { useMotionPreferences, useTextMotion } from "./choreography";

type Trigger = "view" | "mount";
type ViewportOpts = { once?: boolean; amount?: number; margin?: string };

/** Shared trigger props. "mount" is for above-the-fold content, "view" for scroll reveals. */
function triggerProps(trigger: Trigger, vp: ViewportOpts = defaultViewport) {
  return trigger === "mount"
    ? ({ initial: "hidden", animate: "visible" } as const)
    : ({ initial: "hidden", whileInView: "visible", viewport: vp } as const);
}

/* ---------------------------------------------------------------------------
 * MaskReveal: text rises from behind an invisible mask line.
 * - The observer sits on the OUTER (unclipped) box. IntersectionObserver ignores
 *   elements fully clipped by an overflow-hidden ancestor, so the inner span can't
 *   be the trigger.
 * - The Thai-safe padding/negative-margin pair keeps tone marks above and vowels
 *   below from being clipped, without changing the element's layout box (zero CLS).
 * ------------------------------------------------------------------------- */
const maskCompensation: React.CSSProperties = {
  paddingTop: "0.22em",
  marginTop: "-0.22em",
  paddingBottom: "0.16em",
  marginBottom: "-0.16em",
};

export function MaskReveal({
  children,
  delay = 0,
  inline = false,
  className = "",
  duration,
  trigger = "view",
}: {
  children: React.ReactNode;
  delay?: number;
  inline?: boolean;
  className?: string;
  duration?: number;
  trigger?: Trigger;
}) {
  const variants = useTextMotion("heading", delay, duration);

  if (inline) {
    return (
      <motion.span
        className={`inline-block overflow-hidden align-bottom ${className}`}
        style={maskCompensation}
        {...triggerProps(trigger)}
      >
        <motion.span className="inline-block" variants={variants}>
          {children}
        </motion.span>
      </motion.span>
    );
  }

  return (
    <motion.div
      className={`block overflow-hidden ${className}`}
      style={maskCompensation}
      {...triggerProps(trigger)}
    >
      <motion.div variants={variants}>{children}</motion.div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------------------
 * BlurReveal: retains the existing markup while selecting the section's text motion.
 * ------------------------------------------------------------------------- */
export const blurReveal: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: dur.base, delay: d, ease: ease.out },
  }),
};

export function BlurReveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  trigger = "view",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p" | "span";
  trigger?: Trigger;
}) {
  const variants = useTextMotion("body", delay);
  const props = {
    className,
    variants,
    ...triggerProps(trigger),
  };
  if (as === "p") return <motion.p {...props}>{children}</motion.p>;
  if (as === "span") return <motion.span {...props}>{children}</motion.span>;
  return <motion.div {...props}>{children}</motion.div>;
}

/* ---------------------------------------------------------------------------
 * ClipReveal: architectural curtain wipe for frames, panels and ruled rows.
 * clip-path is dropped on completion (transitionEnd) so shadows and overhanging
 * children are never clipped once the reveal has finished.
 * ------------------------------------------------------------------------- */
type Dir = "up" | "down" | "left" | "right";
const clipFrom: Record<Dir, string> = {
  up: "inset(100% 0% 0% 0%)",
  down: "inset(0% 0% 100% 0%)",
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
};

export function ClipReveal({
  children,
  dir = "up",
  delay = 0,
  duration = dur.base,
  className = "",
  amount = 0.05,
  trigger = "view",
  style,
}: {
  children: React.ReactNode;
  dir?: Dir;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
  trigger?: Trigger;
  style?: React.CSSProperties;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: dir === "up" ? 24 : dir === "down" ? -24 : 0,
      x: dir === "left" ? 24 : dir === "right" ? -24 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration, delay, ease: ease.out },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      variants={variants}
      {...triggerProps(trigger, { ...defaultViewport, amount: amount ?? 0.05 })}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------------------
 * Stagger orchestration: the parent triggers once, children inherit "visible".
 * ------------------------------------------------------------------------- */
export const groupVariants = (gap = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren } },
});

export const itemRise: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: dur.base, ease: ease.out } },
};

/** Horizontal hairline draw (only for elements that contain no text). */
export const hairlineDraw: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.85, ease: ease.out } },
};

/* ---------------------------------------------------------------------------
 * Card hover: spring y-lift plus a shadow layer that fades in with opacity.
 * No box-shadow animation (paint), no scale (text shimmer), no border colour change.
 * ------------------------------------------------------------------------- */
export const liftCard: Variants = {
  rest: { y: 0, transition: spring.lift },
  hover: { y: -6, transition: spring.lift },
};

export const liftShadow: Variants = {
  rest: { opacity: 0, transition: { duration: dur.micro, ease: ease.soft } },
  visible: { opacity: 0, transition: { duration: dur.micro, ease: ease.soft } },
  hover: { opacity: 1, transition: { duration: dur.micro, ease: ease.soft } },
};

/** Parent must be `relative isolate` so the layer sits under content but above the page. */
export function ShadowLayer({ className = "" }: { className?: string }) {
  return (
    <motion.span
      aria-hidden
      initial="rest"
      variants={liftShadow}
      className={`pointer-events-none absolute inset-0 -z-10 shadow-[0_18px_40px_-14px_rgba(20,99,72,0.22)] ${className}`}
    />
  );
}

/* ---------------------------------------------------------------------------
 * Magnetic: CTA gently follows the cursor (mouse only, clamped, translate only).
 * ------------------------------------------------------------------------- */
export function Magnetic({
  children,
  strength = 0.18,
  max = 6,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { reduced: reduce, compact } = useMotionPreferences();
  const x = useSpring(0, spring.magnetic);
  const y = useSpring(0, spring.magnetic);
  const clamp = (v: number) => Math.max(-max, Math.min(max, v));

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduce || compact ? undefined : { x, y }}
      onPointerMove={(e) => {
        if (reduce || compact || e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set(clamp((e.clientX - (r.left + r.width / 2)) * strength));
        y.set(clamp((e.clientY - (r.top + r.height / 2)) * strength));
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------------------
 * useParallax: scroll-linked translateY (never scale), spring-smoothed.
 * ------------------------------------------------------------------------- */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  range: [number, number] = [0, -60]
) {
  const ref = useRef<T>(null);
  const { reduced: reduce, compact } = useMotionPreferences();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], reduce || compact ? [0, 0] : range);
  const y = useSpring(raw, { stiffness: 90, damping: 24, mass: 0.6 });
  return { ref, y };
}

/* ---------------------------------------------------------------------------
 * Shared CTA micro-interaction: replaces every hover `scale`.
 * ------------------------------------------------------------------------- */
export const ctaMotion = {
  whileHover: { y: -2 },
  whileTap: { y: 0 },
  transition: spring.press,
} as const;

"use client";

import React, { createContext, useContext, useRef, useSyncExternalStore } from "react";
import { motion, useInView, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";
import { ease, spring, viewport } from "./tokens";

type Profile = "cover" | "introduction" | "standards" | "diagnostics" | "specialists" | "contact";
export type RevealEffect = "fade" | "rise" | "from-left" | "from-right" | "frame-up" | "frame-down" | "frame-center" | "line";

const ProfileContext = createContext<Profile>("introduction");
const compactQuery = "(max-width: 767px)";
function subscribeCompact(callback: () => void) {
  const query = window.matchMedia(compactQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const getCompact = () => window.matchMedia(compactQuery).matches;
const serverCompact = () => true;

export function useMotionPreferences() {
  const reduced = useReducedMotion() === true;
  const compact = useSyncExternalStore(subscribeCompact, getCompact, serverCompact);
  return { reduced, compact };
}

/** A context boundary only: renders the original section, without transforms or extra boxes. */
export function MotionSection({ profile, children, ...props }: React.ComponentProps<"section"> & { profile: Profile }) {
  return (
    <ProfileContext.Provider value={profile}>
      <section {...props}>{children}</section>
    </ProfileContext.Provider>
  );
}

export function useTextMotion(kind: "heading" | "body", delay: number, duration?: number): Variants {
  const profile = useContext(ProfileContext);
  const { reduced, compact } = useMotionPreferences();
  let hidden: Record<string, number | string> = { opacity: 0 };

  if (!reduced) {
    if (profile === "cover") hidden = { opacity: 0, y: kind === "heading" ? "112%" : 8 };
    if (profile === "introduction") hidden = { opacity: 0, x: compact ? 0 : -18, y: compact ? 8 : 0 };
    if (profile === "standards") hidden = { opacity: 0, y: kind === "heading" ? 10 : 0 };
    if (profile === "diagnostics") hidden = { opacity: 0, y: kind === "heading" ? "70%" : 8 };
    if (profile === "specialists") hidden = { opacity: 0, x: compact ? 0 : -8 };
    if (profile === "contact") hidden = { opacity: 0, x: compact ? 0 : -12, y: compact ? 6 : 0 };
  }

  return {
    hidden: reduced ? { opacity: 1, x: 0, y: 0 } : hidden,
    visible: {
      opacity: 1, x: 0, y: 0,
      transition: {
        duration: reduced ? 0 : duration ?? (kind === "heading" ? 0.8 : 0.6),
        delay: reduced ? 0 : Math.min(delay, compact ? 0.12 : 0.28),
        ease: ease.out,
      },
    },
  };
}

function revealVariants(effect: RevealEffect, delay: number, duration: number, lift: boolean, { reduced, compact }: { reduced: boolean; compact: boolean }): Variants {
  const distance = compact ? 8 : 20;
  const hidden = {
    fade: { opacity: 0 },
    rise: { opacity: 0, y: distance },
    "from-left": { opacity: 0, x: compact ? 0 : -distance, y: compact ? 8 : 0 },
    "from-right": { opacity: 0, x: compact ? 0 : distance, y: compact ? 8 : 0 },
    "frame-up": { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
    "frame-down": { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
    "frame-center": { opacity: 0, clipPath: "inset(0% 50% 0% 50%)" },
    line: { opacity: 1, scaleX: 0 },
  }[effect];
  const isFrame = effect.startsWith("frame-");
  const visible = {
    opacity: 1, x: 0, y: 0, scaleX: 1,
    ...(isFrame ? { clipPath: "inset(0% 0% 0% 0%)" } : {}),
  };
  return {
    hidden: reduced ? { ...visible, ...(isFrame ? { clipPath: "none" } : {}) } : hidden,
    visible: {
      ...visible,
      transition: { duration: reduced ? 0 : duration, delay: reduced ? 0 : Math.min(delay, compact ? 0.08 : 0.24), ease: ease.out },
      ...(isFrame ? { transitionEnd: { clipPath: "none" } } : {}),
    },
    ...(lift ? { hover: { y: reduced || compact ? 0 : -6, transition: spring.lift } } : {}),
  };
}

type RevealProps = {
  effect?: RevealEffect;
  delay?: number;
  duration?: number;
  /** Children share their enclosing reveal's trigger; useful for short sequences. */
  inherit?: boolean;
  lift?: boolean;
};

/** Replaces an existing div one-for-one; all sizing, classes and content are passed through. */
export function MotionDiv({ effect = "fade", delay = 0, duration = 0.7, inherit = false, lift = false, ...props }: HTMLMotionProps<"div"> & RevealProps) {
  const preferences = useMotionPreferences();
  const variants = revealVariants(effect, delay, duration, lift, preferences);
  const { reduced } = preferences;
  const triggerRef = useRef<Element>(null);
  const inView = useInView(triggerRef, viewport);
  return <motion.div {...props} variants={variants}
    ref={(element) => {
      // A completely clipped element cannot intersect. Observe its existing,
      // unclipped parent instead; inherited reveals use their parent's sequence.
      triggerRef.current = inherit ? null : effect.startsWith("frame-") ? element?.parentElement ?? null : element;
    }}
    {...(!inherit ? { initial: "hidden", animate: inView || reduced ? "visible" : "hidden" } : {})}
    {...(lift && !reduced && !preferences.compact ? { whileHover: "hover" } : {})}
  />;
}

export function MotionLine({ delay = 0, ...props }: HTMLMotionProps<"span"> & { delay?: number }) {
  const preferences = useMotionPreferences();
  const variants = revealVariants("line", delay, 0.65, false, preferences);
  return <motion.span {...props} variants={variants} />;
}

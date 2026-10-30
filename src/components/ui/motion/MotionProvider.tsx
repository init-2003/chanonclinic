"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

/**
 * Global motion configuration.
 * reducedMotion="user": when the OS requests reduced motion, Framer skips
 * transform/layout animations (opacity fades remain) for EVERY motion.* element,
 * including inline ones that don't go through the wrapper components.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

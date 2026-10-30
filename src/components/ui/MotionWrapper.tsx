"use client";

import React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  Variants,
  HTMLMotionProps,
} from "framer-motion";

// Apple Fluid Cubic Bezier Ease: Signature slow, luxurious deceleration (apple.com standard)
export const appleEase = [0.16, 1, 0.3, 1] as const;
export const customEase = appleEase;

// Default scroll trigger viewport setting: triggers on both scroll down & scroll up with zero blank lag
export const defaultViewport = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -10% 0px",
} as const;

// 1. FadeInUp Variants (Apple Style: Silky 0.95s deceleration)
export const fadeInUpVariants: Variants = {
  hidden: {
    y: 24,
    opacity: 0,
  },
  visible: (customDelay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.95,
      delay: customDelay,
      ease: appleEase,
    },
  }),
};

// 2. Stagger Container & Item Variants (Apple Style: Unhurried, elegant cadence)
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: {
    y: 22,
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: appleEase,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: appleEase,
    },
  },
};

// 3. ScaleIn Variants (Apple Style: Gentle scale glide)
export const scaleInVariants: Variants = {
  hidden: {
    scale: 0.95,
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: appleEase,
    },
  },
  visible: (customDelay = 0) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.95,
      delay: customDelay,
      ease: appleEase,
    },
  }),
};

// 4. Directional Fade (Left & Right for ContactSection & Highlights)
export const fadeInLeftVariants: Variants = {
  hidden: {
    x: -24,
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: appleEase,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.95,
      ease: appleEase,
    },
  },
};

export const fadeInRightVariants: Variants = {
  hidden: {
    x: 24,
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: appleEase,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.95,
      ease: appleEase,
    },
  },
};

// 5. Blur Focus Variants (Hero Section Title & Subtitle - Apple Flagship Blur Dissolve)
export const blurFocusVariants: Variants = {
  hidden: {
    filter: "blur(8px)",
    opacity: 0,
    y: 26,
    transition: {
      duration: 0.4,
      ease: appleEase,
    },
  },
  visible: (customDelay = 0) => ({
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.15,
      delay: customDelay,
      ease: appleEase,
    },
  }),
};

// 6. Frame Mask & Scale Variants (Hero Image Entrance - Apple Smooth Parallax)
export const frameMaskVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 22,
    transition: {
      duration: 0.4,
      ease: appleEase,
    },
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay: customDelay,
      ease: appleEase,
    },
  }),
};

// 7. Spine Line Draw Downward (Section left spine)
export const spineLineVariants: Variants = {
  hidden: {
    scaleY: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: appleEase,
    },
  },
};

// 8. Horizontal Line Draw (Architectural dividers & numbers)
export const lineDrawVariants: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  visible: (customDelay = 0) => ({
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.95,
      delay: customDelay,
      ease: appleEase,
    },
  }),
};

// 9. 3D Perspective Tilt Card Variants (Highlights Section 4 Pillars)
export const perspectiveCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    rotateX: 6,
    transition: {
      duration: 0.35,
      ease: appleEase,
    },
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.95,
      delay: customDelay,
      ease: appleEase,
    },
  }),
};

// 10. Ledger Row Variants (Doctors Section Specialties List)
export const ledgerRowVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -22,
    transition: {
      duration: 0.3,
      ease: appleEase,
    },
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      delay: customDelay,
      ease: appleEase,
    },
  }),
};

// 11. Pin Drop Spring Variants (Contact Section Map - Apple Smooth Fluid Spring)
export const pinDropVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -22,
    scale: 0.96,
    transition: {
      duration: 0.35,
      ease: appleEase,
    },
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 1.1,
      delay: customDelay,
    },
  }),
};

// Button tactile interaction props
export const buttonTapHover = {
  whileHover: { y: -2 },
  whileTap: { y: 0 },
  transition: { type: "spring" as const, stiffness: 420, damping: 32 },
};

// Floating badge animation definition
export const subtleFloatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// ============================================================================
// COMPONENT WRAPPERS
// ============================================================================

interface MotionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInUp({
  children,
  delay = 0,
  className = "",
  ...props
}: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      custom={delay}
      variants={fadeInUpVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  ...props
}: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  ...props
}: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={staggerItemVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  delay = 0,
  className = "",
  ...props
}: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      custom={delay}
      variants={scaleInVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInLeft({
  children,
  className = "",
  ...props
}: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInLeftVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInRight({
  children,
  className = "",
  ...props
}: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInRightVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgressBar() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#146348] via-[#1b7a5a] to-[#6ee7b7] origin-left z-[9999] pointer-events-none"
    />
  );
}

export function BlurFocus({
  children,
  delay = 0,
  className = "",
  ...props
}: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      custom={delay}
      variants={blurFocusVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function PerspectiveCard({
  children,
  delay = 0,
  className = "",
  ...props
}: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      custom={delay}
      variants={perspectiveCardVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function LedgerRow({
  children,
  delay = 0,
  className = "",
  ...props
}: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      custom={delay}
      variants={ledgerRowVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function PinDrop({
  children,
  delay = 0,
  className = "",
  ...props
}: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      custom={delay}
      variants={pinDropVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}



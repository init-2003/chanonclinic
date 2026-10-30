/**
 * Motion design tokens: single source of truth for every animation on the site.
 * Brand mood: clinical, calm, trustworthy, editorial. Nothing bounces, nothing shouts.
 */

// Curves: never linear, never the default "easeOut"
export const ease = {
  out: [0.16, 1, 0.3, 1] as const, // expo-out: all entrances
  inOut: [0.65, 0, 0.35, 1] as const, // curtains / clip-path wipes
  soft: [0.22, 1, 0.36, 1] as const, // micro-interactions
  sine: [0.37, 0, 0.63, 1] as const, // ambient loops
};

export const dur = {
  micro: 0.35, // hover, tap
  base: 0.7, // body copy, cards
  slow: 0.85, // headings
  cinematic: 1.1, // hero curtain / pre-hero
} as const;

export const stagger = {
  tight: 0.06, // list items, ledger rows
  base: 0.08, // card grids
  loose: 0.12, // headline lines
} as const;

export const spring = {
  lift: { type: "spring", stiffness: 260, damping: 24, mass: 0.9 }, // card hover
  press: { type: "spring", stiffness: 420, damping: 32 }, // button y-lift
  magnetic: { type: "spring", stiffness: 180, damping: 18, mass: 0.6 }, // cursor follow
  settle: { type: "spring", stiffness: 120, damping: 22, mass: 1 }, // large panels
} as const;

// Play once, slightly before the element enters view to ensure it is never blank
export const viewport = {
  once: true,
  amount: 0.05,
  margin: "0px 0px 60px 0px",
} as const;

// Tall elements (grids, map) need a low threshold to trigger reliably on all screens
export const viewportTight = { once: true, amount: 0.05 } as const;

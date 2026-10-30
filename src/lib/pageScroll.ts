import type Lenis from "lenis";

let scroller: Lenis | null = null;

export function registerPageScroller(instance: Lenis) {
  scroller = instance;
  return () => { if (scroller === instance) scroller = null; };
}

/** Keep menu jumps and ruler scrubbing in sync with wheel/touch momentum. */
export function scrollPageTo(options: ScrollToOptions) {
  if (scroller) {
    scroller.scrollTo(options.top ?? window.scrollY, {
      immediate: options.behavior === "instant",
      force: true,
    });
    return;
  }
  window.scrollTo(options);
}

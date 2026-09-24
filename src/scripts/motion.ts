import { animate, inView, scroll, stagger } from 'motion';

/*
 * Section entrances. Markup opts in with data attributes:
 *   data-reveal="rise"      the element rises into place
 *   data-reveal="stagger"   its [data-reveal-item] children rise one after another
 *   data-reveal="mask"      its [data-reveal-line] children slide up from behind a mask
 *   data-reveal="frame"     an image frame opens like a pane of glass
 *   data-scroll-line        a line that fills as its section scrolls through the viewport
 *
 * Content is visible by default. Initial states are applied from here, only to elements that start
 * below the fold, so a failed script or reduced motion never hides anything.
 */

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function startsBelowFold(element: Element): boolean {
  return element.getBoundingClientRect().top > window.innerHeight * 0.85;
}

function hide(targets: Element[], transform: string): void {
  targets.forEach((target) => {
    if (target instanceof HTMLElement || target instanceof SVGElement) {
      target.style.opacity = '0';
      target.style.transform = transform;
    }
  });
}

function setupReveal(element: HTMLElement): void {
  const kind = element.dataset.reveal;
  if (!startsBelowFold(element)) return;

  if (kind === 'rise') {
    hide([element], 'translateY(32px)');
    inView(
      element,
      () => {
        animate(
          element,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.8, ease: EASE_OUT },
        );
      },
      { amount: 0.2 },
    );
    return;
  }

  if (kind === 'stagger') {
    const items = Array.from(element.querySelectorAll('[data-reveal-item]'));
    hide(items, 'translateY(24px)');
    inView(
      element,
      () => {
        animate(
          items,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.7, ease: EASE_OUT, delay: stagger(0.07) },
        );
      },
      { amount: 0.15 },
    );
    return;
  }

  if (kind === 'mask') {
    const lines = Array.from(element.querySelectorAll('[data-reveal-line]'));
    lines.forEach((line) => {
      if (line instanceof HTMLElement) line.style.transform = 'translateY(105%)';
    });
    inView(
      element,
      () => {
        animate(
          lines,
          { transform: 'translateY(0%)' },
          { duration: 0.9, ease: EASE_OUT, delay: stagger(0.08) },
        );
      },
      { amount: 0.3 },
    );
    return;
  }

  if (kind === 'frame') {
    element.style.clipPath = 'inset(12% 8% 12% 8% round 14px)';
    element.style.opacity = '0.4';
    inView(
      element,
      () => {
        animate(
          element,
          { clipPath: 'inset(0% 0% 0% 0% round 14px)', opacity: 1 },
          { duration: 1.1, ease: EASE_IN_OUT },
        );
      },
      { amount: 0.25 },
    );
  }
}

function setupScrollLines(): void {
  document.querySelectorAll<HTMLElement>('[data-scroll-line]').forEach((line) => {
    const section = line.closest('section');
    if (!section) return;
    const axis = window.matchMedia('(min-width: 56rem)').matches ? 'scaleX' : 'scaleY';
    line.style.transform = `${axis}(0)`;
    scroll(animate(line, { transform: [`${axis}(0)`, `${axis}(1)`] }, { ease: 'linear' }), {
      target: section,
      offset: ['start 0.75', 'end 0.7'],
    });
  });
}

function setupHeroWords(): void {
  const words = Array.from(document.querySelectorAll<HTMLElement>('[data-hero-word]'));
  if (words.length === 0) return;
  animate(
    words,
    { transform: ['translateY(110%)', 'translateY(0%)'] },
    { duration: 0.9, ease: EASE_OUT, delay: stagger(0.05, { startDelay: 0.1 }) },
  ).then(() => document.documentElement.classList.add('hero-ready'));
}

/** Marks skeleton frames as loaded once their image has arrived (or failed), so the shimmer stops. */
function setupSkeletons(): void {
  document.querySelectorAll<HTMLElement>('.skeleton').forEach((frame) => {
    const image = frame.querySelector('img');
    const markLoaded = (): void => frame.classList.add('is-loaded');
    if (!image || (image.complete && image.naturalWidth > 0)) {
      markLoaded();
      return;
    }
    image.addEventListener('load', markLoaded, { once: true });
    image.addEventListener('error', markLoaded, { once: true });
  });
}

setupSkeletons();

if (!prefersReducedMotion) {
  setupHeroWords();
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(setupReveal);
  setupScrollLines();
} else {
  document.documentElement.classList.add('hero-ready');
}

import { useEffect, useRef } from 'react';

export function useTimelineProgress() {
  const ref = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const timeline = ref.current;
    if (!timeline) return;
    const items = Array.from(timeline.children) as HTMLElement[];
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    // Preserve progress when scrolling back so the story unfolds once, at the reader's pace.
    let furthest = 0;
    const update = () => {
      frame = 0;
      const bounds = timeline.getBoundingClientRect();
      const last = items.at(-1);
      if (!last) return;
      const length = last.offsetTop - items[0].offsetTop;
      const readingLine = window.innerHeight * .72;
      furthest = Math.min(length, Math.max(furthest, Math.max(0, readingLine - bounds.top - 18)));
      timeline.style.setProperty('--timeline-length', `${length}px`);
      timeline.style.setProperty('--timeline-progress', `${preference.matches ? length : furthest}px`);
      items.forEach(item => {
        if (preference.matches || item.getBoundingClientRect().top + 18 <= readingLine) {
          item.classList.add('is-reached');
        }
      });
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(timeline);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    preference.addEventListener('change', schedule);
    update();
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      preference.removeEventListener('change', schedule);
    };
  }, []);
  return ref;
}

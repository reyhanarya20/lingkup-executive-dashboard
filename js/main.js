/**
 * Lingkup Executive Dashboard — main.js
 * Handles scroll-triggered fade-up animations for dashboard sections.
 */

// ─── Fade-up on scroll ───────────────────────────────────────────
const fadeUpObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-up').forEach((el) => {
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  fadeUpObserver.observe(el);
});

// ─── Number counter animation ────────────────────────────────────
// Utility available for animating a stat from 0 → target value.
// Not currently wired to any element, but kept here for reuse
// (e.g. call animateCount(document.querySelector('.hook-number'), 15364)).
function animateCount(el, end, duration = 1500, prefix = '', suffix = '') {
  let start = 0;
  const step = end / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= end) {
      start = end;
      clearInterval(timer);
    }
    el.textContent = prefix + Math.floor(start).toLocaleString('id-ID') + suffix;
  }, 16);
}

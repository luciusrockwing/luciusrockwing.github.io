// Scroll entrance animations via Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animatedElements = document.querySelectorAll(
    '#portfolio-header, #about-section, #showcase-section, #project-header, #project-details'
  );

  animatedElements.forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = prefersReducedMotion ? '0ms' : `${index * 80}ms`;
  });

  if (prefersReducedMotion) {
    animatedElements.forEach(el => el.classList.add('fade-in--visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  animatedElements.forEach(el => observer.observe(el));
});

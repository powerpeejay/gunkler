// gunkler/js/app.js — minimal interactivity. Used by all pages.

(() => {
  // 1. Sticky-header scrolled-state
  const header = document.querySelector('.site-header');
  if (header) {
    let raf = 0;
    const update = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      raf = 0;
    };
    addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
    update();
  }

  // 2. Mobile nav toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.dataset.open === 'true';
      nav.dataset.open = String(!open);
      toggle.setAttribute('aria-expanded', String(!open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
})();

(function () {
  'use strict';

  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    root.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem('theme', theme); } catch (e) { /* ignore */ }
  }

  function setupThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  function setupMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!toggle || !menu) return;

    function close() {
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    }
    function open() {
      menu.classList.remove('hidden');
      toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', () => {
      const isHidden = menu.classList.contains('hidden');
      if (isHidden) open(); else close();
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', close);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  function setupHeaderShadow() {
    const header = document.getElementById('site-header');
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 8) {
        header.classList.add('shadow-sm');
      } else {
        header.classList.remove('shadow-sm');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function setupSmoothAnchors() {
    if (prefersReducedMotion) return;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function setupRevealOnScroll() {
    const items = document.querySelectorAll('.reveal-on-scroll');
    if (!items.length) return;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => observer.observe(el));
  }

  function setupExternalLinkSafety() {
    document.querySelectorAll('a[target="_blank"]').forEach(a => {
      const rel = (a.getAttribute('rel') || '').split(/\s+/);
      if (!rel.includes('noopener')) rel.push('noopener');
      if (!rel.includes('noreferrer')) rel.push('noreferrer');
      a.setAttribute('rel', rel.filter(Boolean).join(' '));
    });
  }

  function init() {
    setupThemeToggle();
    setupMobileMenu();
    setupHeaderShadow();
    setupSmoothAnchors();
    setupRevealOnScroll();
    setupExternalLinkSafety();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

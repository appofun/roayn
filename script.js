'use strict';

/* ── Navbar: scroll class + mobile toggle ───────────────────────────── */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const toggle    = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');
  if (!navbar || !toggle || !navLinks) return;

  /* Scroll shadow */
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile toggle */
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  /* Close on link click */
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();


/* ── Fade-in via IntersectionObserver ───────────────────────────────── */
(function initFadeIn() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
})();


/* ── FAQ accordion ──────────────────────────────────────────────────── */
(function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');
    if (!btn || !ans) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      /* Close siblings */
      document.querySelectorAll('.faq-item.open').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-a').style.maxHeight = null;
        }
      });

      /* Toggle this */
      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
      ans.style.maxHeight = isOpen ? null : ans.scrollHeight + 'px';
    });
  });
})();


/* ── Newsletter form ────────────────────────────────────────────────── */
(function initNewsletter() {
  const form   = document.getElementById('nl-form');
  const status = document.getElementById('sr-status');
  if (!form || form.getAttribute('action') !== '#') return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('#nl-email')?.value.trim() ?? '';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (status) status.textContent = 'Please enter a valid email address.';
      form.querySelector('#nl-email')?.focus();
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'You\'re in! ✓';
      btn.disabled = true;
      btn.style.background = 'linear-gradient(135deg,#059669,#10B981)';
    }
    if (status) status.textContent = 'You have successfully joined the Roayn newsletter.';
    const input = form.querySelector('#nl-email');
    if (input) input.value = '';
  });
})();


/* ── Smooth scroll offset for sticky navbar ─────────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 76; /* navbar height */
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


/* ── Progress bar animation on scroll (Why section) ─────────────────── */
(function initProgressBar() {
  const bar = document.querySelector('.wv-bar-fill');
  if (!bar) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        bar.style.width = bar.style.width || '68%';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });

  io.observe(bar.closest('.wv-card') ?? bar);
})();

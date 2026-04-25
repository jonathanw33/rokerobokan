// ── NAV THEME (IntersectionObserver) ────────────────────────
const nav = document.getElementById('nav');
const sections = document.querySelectorAll('[data-nav-theme]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const theme = entry.target.dataset.navTheme;
      nav.classList.toggle('nav-on-light', theme === 'dark');
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => navObserver.observe(s));

// ── NAV SCROLL BORDER ────────────────────────────────────────
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.75);
}, { passive: true });

// ── HERO PARALLAX ────────────────────────────────────────────
const heroBg = document.querySelector('.hero-bg, #roomHeroBg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      heroBg.style.transform = `translateY(${window.scrollY * 0.38}px)`;
    }
  }, { passive: true });
}

// ── SCROLL REVEALS ───────────────────────────────────────────
const reveals = document.querySelectorAll('[data-reveal], [data-clip-reveal]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));

// ── HAMBURGER MENU ───────────────────────────────────────────
const hamburger   = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose   = document.getElementById('menuClose');

hamburger.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

menuOverlay.addEventListener('click', (e) => {
  if (e.target === menuOverlay) closeMenu();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

function openMenu() {
  menuOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

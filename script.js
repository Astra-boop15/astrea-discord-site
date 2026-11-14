// Simple site script for Astréa with preloader behavior

// set year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Keep the home links working on both root-hosted sites and GitHub Pages project sites.
const homeUrl = new URL('index.html', window.location.href);
const normalizePath = (path) => path.replace(/index\.html$/, '').replace(/\/?$/, '/');
const currentPageIsHome = normalizePath(window.location.pathname) === normalizePath(homeUrl.pathname);

document.querySelectorAll('.brand, .nav a').forEach((link) => {
  const isHomeLink = link.classList.contains('brand') || link.textContent.trim() === 'Accueil';
  if (!isHomeLink) return;

  link.href = homeUrl.href;
  link.addEventListener('click', (event) => {
    if (!currentPageIsHome) return;

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Placeholder member count — replace with real widget or API if you have one
const memberCountEl = document.getElementById('memberCount');
if (memberCountEl) memberCountEl.textContent = '—';

// Small hover animation for server card
const card = document.querySelector('.server-card');
if (card) {
  card.addEventListener('mouseover', () => card.style.transform = 'translateY(-6px)');
  card.addEventListener('mouseout', () => card.style.transform = 'translateY(0)');
  card.style.transition = 'transform 180ms ease';
}

// Preloader: hide after window load
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (!pre) return;
  // small pause to show the animation nicely
  setTimeout(() => {
    pre.classList.add('hidden');
    pre.setAttribute('aria-hidden', 'true');
    // remove from DOM after transition to avoid blocking interactions
    pre.addEventListener('transitionend', () => pre.remove());
  }, 450);
});

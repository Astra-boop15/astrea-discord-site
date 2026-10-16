// Simple site script for Astréa with preloader behavior

// set year
document.getElementById('year').textContent = new Date().getFullYear();

// Placeholder member count — replace with real widget or API if you have one
const memberCountEl = document.getElementById('memberCount');
if(memberCountEl) memberCountEl.textContent = '—';

// Small hover animation for server card
const card = document.querySelector('.server-card');
if(card){
  card.addEventListener('mouseover', () => card.style.transform='translateY(-6px)');
  card.addEventListener('mouseout', () => card.style.transform='translateY(0)');
  card.style.transition = 'transform 180ms ease';
}

// Preloader: hide after window load
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if(!pre) return;
  // small pause to show the animation nicely
  setTimeout(() => {
    pre.classList.add('hidden');
    pre.setAttribute('aria-hidden','true');
    // remove from DOM after transition to avoid blocking interactions
    pre.addEventListener('transitionend', () => pre.remove());
  }, 450);
});

// Handle hamburger open/close
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const icons = hamburger.querySelectorAll('svg');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  icons.forEach(icon => icon.classList.toggle('hidden'));
});

// Close mobile menu on scroll
window.addEventListener('scroll', () => {
  if (!mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    icons.forEach(icon => icon.classList.toggle('hidden'));
  }
});

// Fungsi untuk scroll ke bagian atas halaman
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
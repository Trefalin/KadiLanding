import cursor from './modules/cursor.js';
import mobileMenu from './modules/mobileMenu.js';
import parallax from './modules/parallaxEffect.js';
import loader from './modules/loader.js';

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    loader(true);
  }, 1000)
})
function init() {
  cursor();
  mobileMenu();
  parallax();
}

init();

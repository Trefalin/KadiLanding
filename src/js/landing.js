import cursor from './modules/cursor.js';
import parallax from './modules/parallaxEffect.js';
import swiper from './modules/swiper.js';
import mobileMenu from './modules/mobileMenu.js';
import loader from './modules/loader.js';

function typeWriter(text, speed, elementId, index) {
  let i = index || 0;
  if (i < text.length) {
    document.getElementById(elementId).textContent += text.charAt(i);
    i++;
    setTimeout(() => {
      typeWriter(text, speed, elementId, i)
    }, speed);
  }
}

function init(section) {
  cursor();
  parallax();
  swiper(section);
  mobileMenu();
  typeWriter('kadi', 300, 'promo-title');
  setTimeout(() => {
    typeWriter('will create a masterpiece for you', 50, 'promo-subtitle')
  }, 1100)
}

function start() {
  let section = (new URL(document.location)).searchParams.get('section');
  if (section) {
    setTimeout(() => {
      init(section);
    }, 300)
    return;
  }
  setTimeout(() => {
    loader(true);
    init();
  }, 1000)
}

start();

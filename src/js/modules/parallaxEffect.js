function parallaxEffect() {
  let wrap = '.app';
  if (document.querySelector('.profile')) {
    wrap = '.profile';
  }
  if (window.innerWidth > 1440) {
    parallaxMouse({ elements: '.triangle', moveFactor: 20, wrap: wrap });
  }
}

export default parallaxEffect;
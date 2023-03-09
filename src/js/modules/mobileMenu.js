function mobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.addEventListener('click', toggleMobileMenu);

  function toggleMobileMenu() {
    menu.classList.toggle('__active');
  }
}

export default mobileMenu;
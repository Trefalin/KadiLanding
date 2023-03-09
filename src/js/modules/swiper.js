import loader from './loader.js';

function swiper(defaultSection) {
  const btn = document.getElementById('current-portfolio-slide');
  const nav = document.getElementById('header-nav');
  const mobileNav = document.getElementById('mobile-nav');
  const desktopLinks = document.querySelectorAll('.header-nav__item');
  const mobileLinks = document.querySelectorAll('.mobile-menu__nav-item');
  const windowInnerWidth = window.innerWidth;
  const sections = [
    'promo',
    'portfolio',
    'contact',
    'auth',
  ]
  const portfolioTitle = document.getElementById('portfolio-title');
  const mobileWidth = 768;

  nav.addEventListener('click', clickOnNavLink);
  btn.addEventListener('click', goToPortfolio)
  mobileNav.addEventListener('click', clickOnNavLink);
  const mainSlider = new Swiper('.swiper-container', {
    direction: 'vertical',
    sliderPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: ".next-section",
      prevEl: ".previous-section",
    },
    on: {
      slideChange: function (swiper) {
        setLink(windowInnerWidth > mobileWidth ? desktopLinks[swiper.activeIndex] : mobileLinks[swiper.activeIndex], windowInnerWidth > mobileWidth ? desktopLinks : mobileLinks);
        if (sections[swiper.activeIndex] == 'portfolio') {
          setTimeout(() => {
            portfolioTitle.classList.add('__active');
          }, 200)
        }
      },
    },
  });

  const portfolioSwiper = new Swiper(".portfolio-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    on: {
      afterInit: function (swiper) {
        swiper.slideTo(1, 1);
      },
      slideChange: function (swiper) {
        btn.textContent = swiper.slides[swiper.activeIndex].dataset.portfolio;
        btn.dataset.link = swiper.slides[swiper.activeIndex].dataset.link;
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    }
  });

  if (defaultSection) {
    mainSlider.slideTo(defaultSection, defaultSection);
    setTimeout(() => {
      if (history.pushState) {
        let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        history.pushState(null, null, baseUrl);
      }
      else {
        console.warn('History API не поддерживается');
      }
      loader(true);
    }, 500)
  }

  function clickOnNavLink(e) {
    let link = e.target;
    const section = link.dataset.section;

    if (section) {
      setLink(link, windowInnerWidth > mobileWidth ? desktopLinks : mobileLinks);
      mainSlider.slideTo(section, 0.5);
    }
  }

  function goToPortfolio(e) {
    const link = e.target.dataset.link;
    if (link) {
      window.open(link, '_blank');
    }
  }

  function setLink(link, links) {
    links.forEach(link => {
      link.classList.remove('__active');
    })
    link.classList.add('__active');
  }

}

export default swiper;
import Swiper from './swiper'

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 40,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
  },
});
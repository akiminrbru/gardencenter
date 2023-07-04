import Swiper from './swiper'

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 40,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
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

const swiperPrev = document.getElementById("swiper-next");
const swiperNext = document.getElementById("swiper-prev");

if (swiperPrev && swiperNext ) {
  swiperPrev.addEventListener("click", () => {
    swiper.slidePrev();
  });
  swiperNext.addEventListener("click", () => {
    swiper.slideNext();
  });
}
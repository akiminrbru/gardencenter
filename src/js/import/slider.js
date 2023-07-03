import Swiper from './swiper'

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 40,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});
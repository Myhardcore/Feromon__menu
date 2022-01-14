const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3.4,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 70,
  centeredSlides:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },


});
const swiper = new Swiper('.swiper', {
   // Default parameters
   slidesPerView: 3,
   spaceBetween: 50,

   // If we need pagination
   pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1030: {
      slidesPerView: 3,
      spaceBetween: 40
    },
   
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    initialSlide: 0,
  
    

  }

  });
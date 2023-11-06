let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {        
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },        
        630: {
          slidesPerView: 2,
          spaceBetween: 30
        },        
        910: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
  for (let i=0;i<sliders.length;i++) {
    let slider = sliders[i];
    if (!slider.classList.contains('swiper-build')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let i=0;i<slider_items.length;i++) {
          let el = slider_items[i];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-biuld');
    }
    if (slider.classList.contains('_gallery')) {
      //slider.data('LightGallery').destroy(true);
    }
  }
  slider_build_callback();
}

function slider_build_callback() {}
const News = new Swiper(".news__swiper-slider", {
  /*
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
     */
  slidesPerView: "auto",
  spaceBetween: 15,
  // autoHeight: true,
  //  speed: 800,
  //  touchRatio: 0,
  //  simulateTouch: false,
  loop: true,
  loopSlides: 3,
  visibilityFullFit: true,
  //  preLoadImages: false,
  //  lazy: true,
  initialSlide: 1,
  centeredSlides: true,
  
  // pagination
  pagination: {
    el: ".news__swiper-pagination",
    clickable: true,
  },
  //   // Arrows
  // navigation: {
  //   nextEl: ".news__swiper-button-next",
  //   prevEl: ".news__swiper-button-prev",
  // },

  //  on: {
  //    lazyImageReady: function () {
  //      ibg();
  //    },
  //  },
  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // }
});

const Experts = new Swiper(".experts__swiper-slider", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  loopSlides: 3,
  //  preLoadImages: false,
  //  lazy: true,
  initialSlide: 1,
  centeredSlides: true,
  // pagination
  pagination: {
    el: ".experts__swiper-pagination",
    clickable: true,
  },
  //   // Arrows
  //  navigation: {
  //    nextEl: '.experts__swiper-button-next',
  //    prevEl: '.experts__swiper-button-prev',
  //  },

  //  on: {
  //    lazyImageReady: function () {
  //      ibg();
  //    },
  //  },
  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // }
  
  breakpoints: {
    1440: {
      spaceBetween: 22,
    },
    
  },
});
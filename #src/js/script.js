
// pop-up form sended observer
if (document.querySelector('.form')) {
  let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  let popups = document.querySelectorAll('.form__notification');
  for (let i=0; i<popups.length; i++) {
    let popup = popups[i];
    let observer = new MutationObserver(function(mutations) {  
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes') {
          if (popup.classList.contains('_show')) {
            document.body.classList.add('_lock');
            document.querySelector('.form').classList.add('_lock');
          } else {
            document.body.classList.remove('_lock')
            document.querySelector('.form').classList.remove('_lock');
          }
        }
      });
    });

    observer.observe(popup, {
      attributes: true, 
    });

    //close btn 
    let closeBtns = document.querySelectorAll('.form__notification-close-btn');
    for (let i=0; i<closeBtns.length; i++) {
      let closeBtn = closeBtns[i];
      if (closeBtn) {
        closeBtn.addEventListener('click', ()=>{
          popup.classList.remove('_show');
        });
      };
    };
  };
}

// popup form
if (document.querySelector('.form__open')) {
  const btnFormOpen = document.querySelector('.form__open');
  const btnFormClose = document.querySelector('.form__close');
  const form = document.querySelector('.form');
  if (btnFormOpen) {
    btnFormOpen.addEventListener('click', () => {
      form.classList.add('_visible');
      document.body.classList.add('_lock');
      // document.querySelector('.form').classList.add("_lock");
    });
  }
  if (btnFormClose) {
    btnFormClose.addEventListener('click', () => {
      form.classList.remove('_visible');
      document.body.classList.remove('_lock');
      // document.querySelector('.form').classList.remove("_lock");
    })
  }
}

// маска на телефон формы
const tel = document.querySelector('#tel');
var maskOptions = {
  mask: '{+998}(00)000-00-00'
};

if (tel) {
  tel.onfocus = function() {
    tel.value = "+998(";
    mask.updateValue();
  };
  tel.oninput = function() {
    if (tel.value == "9") {
      tel.value = "+998(9";
    } else if (tel.value == "+") {
      tel.value = "+998(";
    } else if (tel.value == "8") {
      tel.value = "+998(8";
    }
  };
  var mask = IMask(tel, maskOptions);
}

"use strict"
// менять моложение относительно положения мыши
window.onload = function () {
  const parallax = document.querySelector('.content');
  const paralaxItem1 = document.querySelector('.anim__background-mask');
  const paralaxItem2 = document.querySelector('.anim__background-cloud');
  const paralaxItem3 = document.querySelector('.anim__background-squareP');
  const paralaxItem4 = document.querySelector('.anim__background-squareB');
  const paralaxItem5 = document.querySelector('.anim__background-rectangle');
  const paralaxItem6 = document.querySelector('.anim-bg-pills');
  const paralaxItem7 = document.querySelector('.experts__swiper-bg');
  const paralaxItem8 = document.querySelector('.anim__bg-atom');
  const paralaxItem9 = document.querySelector('.header__cursor');
  const paralaxItem10 = document.querySelector('.anim__bg-middle');
  
  if (parallax) {
    const changer = 25;
    const changer2 = 50;

    const speed = 0.15;

    let positionX = 0, positionY=0;
    let coordXpercent = 0, coordYpercent = 0;

    function setMousePrallaxStyle() {
      const distX = coordXpercent - positionX;
      const distY = coordYpercent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);
      
      if (paralaxItem1) {
        paralaxItem1.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%);`;
      };
      if (paralaxItem2) {
        paralaxItem2.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%);`;
      }; 
      if (paralaxItem3) {
        paralaxItem3.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%) rotate(45deg);`;
      }; 
      if (paralaxItem4) {
        paralaxItem4.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%);`;
      }; 
      if (paralaxItem5) {
        paralaxItem5.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%);`;
      }; 
      if (paralaxItem6) {
        paralaxItem6.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%);`;
      };
      if (paralaxItem7) {
        paralaxItem7.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%) rotate(37deg);`;
      };
      if (paralaxItem8) {
        paralaxItem8.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%);`;
      };
      if (paralaxItem9) {
        paralaxItem9.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%);`;
      };
      if (paralaxItem10) {
        paralaxItem10.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%);`;
      };

      requestAnimationFrame(setMousePrallaxStyle);
    }
    setMousePrallaxStyle();

    parallax.addEventListener("mousemove", function(e) {
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      coordXpercent = (coordX / parallaxWidth) * 400;
      coordYpercent = (coordY / parallaxHeight) * 500;
    });
  }
}
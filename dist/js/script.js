const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    closeElemLink = document.querySelector('.munu__block-links');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
        /*Создание функции на выключение меню при клике на ссылку  */
closeElemLink.addEventListener('click', () => {
    menu.classList.remove('active');
});
const slider = tns({
    container: '.expert__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    
    responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 1
        },
        700: {
          gutter: 30,
          
        },
        900: {
        edgePadding: -120,
        gutter: 400,
          items: 1
        }
    }
  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  }); 
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  }); 
  
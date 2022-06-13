$('.js-achievements').slick({
    dots: true,
    arrows: false,
    dotsClass: 'slider-dots',
    mobileFirst: true,
    infinite: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        }
    ]
  });
const btn = document.querySelector('.main-menu__btn');
const list = document.querySelector('.main-menu__list');
const overlay = document.querySelector('.header__overlay');
const body = document.querySelector('.body');

btn.addEventListener('click', menuToggle);
overlay.addEventListener('click', menuToggle);

function menuToggle() {
    btn.classList.toggle('show');
    list.classList.toggle('show');
    overlay.classList.toggle('show');
    body.classList.toggle('no-scroll');
}

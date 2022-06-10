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

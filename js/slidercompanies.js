$(document).ready(function(){
    $('.customer-logos').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      dots: false,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 801,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 520,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }]
    });
  });
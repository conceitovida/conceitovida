$(document).ready(function(){

  // menu
  createMobileMenu()
  $('.hamburger').click(hamburgerMenu);

  // carousel
  $('#homeCarousel').slick(homeCarouselSettings);
  $('#aboutCarousel').slick(aboutCarouselSettings);
  $('#aboutCarouselMenu').slick(aboutCarouselMenuSettings);

  // services
  $('.card').each(shapeCard).flip();

});

var createMobileMenu = function () {
  var content = $('nav.menu ul').clone();
  var mobileMenu = document.createElement('nav');
  $(mobileMenu).addClass('menu mobile').html(content);
  $('header').after(mobileMenu);
};

var hamburgerMenu = function () {
    var mobileMenu = $('nav.menu.mobile');
    mobileMenu.toggleClass('active');
    mobileMenu.find('ul').addClass('animated');
};

var homeCarouselSettings = {
  dots: true,
  nextArrow: '<button type="button" class="slick-next">&gt;</button>',
  prevArrow: '<button type="button" class="slick-prev">&lt;</button>'
};

var aboutCarouselSettings = {
  arrows: false,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '#aboutCarouselMenu',
  nextArrow: '<button type="button" class="slick-next">&gt;</button>',
  prevArrow: '<button type="button" class="slick-prev">&lt;</button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        fade: true
      }
    }
  ]
};

var svgArrow = '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="#FFF" d="M165 .6l-87 87L37.2 128 78 168.8l87 87 40.4-40.6-87-87 87-87"/></svg>';

var aboutCarouselMenuSettings = {
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '#aboutCarousel',
  arrows: true,
  centerMode: true,
  focusOnSelect: true,
  nextArrow: '<div class="slick-next">' + svgArrow + '</div>',
  prevArrow: '<div class="slick-prev">' + svgArrow + '</div>',
  appendArrow: $('#abourCarouselMenu .slick-track')
};

var shapeCard = function () {
  var cardWidth = $(this).width() + 'px';
  $(this).height($(this).width());
  $(this).resize(shapeCard);

  var cssBg = 'url(' + this.dataset.cover + ')';
  $(this).find('.front > div').css('background-image', cssBg);
};


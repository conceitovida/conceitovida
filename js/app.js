$(document).ready(function(){

  // menu
  createMobileMenu()
  $('.hamburger').click(hamburgerMenu);

  // carousel
  $('#carousel').slick(carouselSettings);

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

var carouselSettings = {
  'dots': true,
  'nextArrow': '<button type="button" class="slick-next">&gt;</button>',
  'prevArrow': '<button type="button" class="slick-prev">&lt;</button>'
};

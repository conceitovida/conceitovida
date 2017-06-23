$(document).ready(function(){

  // carousel
  $('#carousel').slick(carouselSettings);

  // home
  fixHomeMain();
  $(window).resize(fixHomeMain);

});

var carouselSettings = {
  'dots': true,
  'nextArrow': '<button type="button" class="slick-next">&gt;</button>',
  'prevArrow': '<button type="button" class="slick-prev">&lt;</button>'
};

var fixHomeMain = function () {
  var homeMain = $('main.home');

  if (homeMain.height() !== undefined) {
    var height = 'auto';
    homeMain.find('div').css('height', 'auto');

    if($(window).width() >= 768) {
      height = homeMain.height() + 'px';
      homeMain.find('div').css('height', height);
    }

  }
};

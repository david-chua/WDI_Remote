$(window).on('scroll', function() {

  var scrolled = $(window).scrollTop();

  $('.bg').css('top', scrolled * -1.1);
  $('.top-left').css('top', scrolled * 0.3);
  $('#circus-cat').css('-webkit-transform','scale(1,2)');
  $('.main').css('left', scrolled * 2.0);
  // $('.bottom-left').css('top', scrolled * 0.3);
  // $('.bottom-center').css('top', scrolled * 0.8);
  $('.break').css('top', scrolled * 0.5);
  //
  $("img").css('-webkit-transform', 'skewX('+scrolled * .5+'deg )');

});

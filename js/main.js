$(function(){
  $('.slider').slick({
    arrows:true,
    nextArrow:'<button type="button" class="slick-prev"><img src="images/left.svg" alt=""></button>',
    prevArrow:'<button type="button" class="slick-next"> <img src="images/right.svg" alt=""></button>'
  });
  $('.menu__btn').on('click', function(){
$('.menu__list').slideToggle();
  });
  });
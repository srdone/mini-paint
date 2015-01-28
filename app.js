$(document).ready(function () {
  
  var currentColor = 'white';
  var allColors = 'red blue green yellow white';
  
  $('#pallate').children('a').on('click', function () {
    currentColor = this.id;
  });
  
  $('#reset').on('click', function () {
    $('.box').removeClass(allColors);
  });
  
  $('.box').on('click', function () {
    $(this).toggleClass(currentColor);
  });
  
});
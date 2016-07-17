$(document).ready(function () {
  $("#carousel").slidingCarousel({
    squeeze: 300,
    shadow: false
  });

  $(window).resize(function(){
    var width = $(window).width();
    if(width >= 768){
      $('.scroll-block').slimScroll({
        height: '300px'
      });
    } else{
      $('.scroll-block').slimScroll({
        height: '500px'
      });

    }
  }).resize();//trigger the resize event on page load.

  $('.btn-sendinfo').on('click', function(e) {
    e.preventDefault();
    console.log('123');
    $(this).parents('.step-1').hide().next().show();
  });

  $('.btn-answer').on('click', function(e) {
    e.preventDefault();
    console.log('321');
    $(this).parents('.step-2').hide().next().show();
  });
});


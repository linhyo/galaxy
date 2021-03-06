$(document).ready(function () {

  smoothScroll.init();

  $(window).resize(function(){
    var width = $(window).width();
    if(width >= 768){
      $('.scroll-block').slimScroll({
        height: '300px',
        alwaysVisible: true
      });
    } else{
      $('.scroll-block').slimScroll({
        height: '500px',
        alwaysVisible: true
      });
    }

    setTimeout(function(){
      if (width >= 1600) {
        $("#game-carousel").featureCarousel({
          autoPlay: false,
          largeFeatureWidth :   1,
          largeFeatureHeight:		1,
          smallFeatureWidth:    0.85,
          smallFeatureHeight:		0.85,
          sidePadding:          50,
          trackerIndividual: false,
          trackerSummation: false
        });
      } else if (width >= 1200 && width < 1599) {
        $("#game-carousel").featureCarousel({
          autoPlay: false,
          smallFeatureWidth:    0.85,
          smallFeatureHeight:		0.85,
          sidePadding:          0,
          trackerIndividual: false,
          trackerSummation: false
        });
      } else {
        $("#game-carousel").featureCarousel({
          autoPlay: false,
          largeFeatureWidth :   0.85,
          largeFeatureHeight:		0.85,
          smallFeatureWidth:    0.7,
          smallFeatureHeight:		0.7,
          sidePadding:          30,
          trackerIndividual: false,
          trackerSummation: false
        });
      }
    }, 100);

  }).resize();//trigger the resize event on page load.

  var gameSlider = $('#game-slider');

  gameSlider.owlCarousel({
    slideSpeed: 300,
    items: 1,
    margin: 5,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      "<div class='carousel-ctrl' id='carousel-left'></div>",
      "<div class='carousel-ctrl' id='carousel-right'></div>"
    ],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  });

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

  var checkValue = function(input){
    if(input.val().length > 0){
      input.parent().find('label').addClass('isTyped');
      input.addClass('isTyped');
    }else{
      input.parent().find('label').removeClass('isTyped');
      input.removeClass('isTyped');
    }
  };

  $('input, textarea').focus(function () {
    $(this).parent().find('label').addClass('active');
    checkValue($(this));
  }).blur(function () {
    $(this).parent().find('label').removeClass('active');
    checkValue($(this));
  });
});


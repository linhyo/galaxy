$(document).ready(function () {

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
    } else if (width >= 992 && width < 1200) {
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
    } else if (width >= 768 && width < 991) {
      $("#game-carousel").featureCarousel({
        autoPlay: false,
        largeFeatureWidth :   0.8,
        largeFeatureHeight:		0.8,
        smallFeatureWidth:    0.65,
        smallFeatureHeight:		0.65,
        sidePadding:          0,
        trackerIndividual: false,
        trackerSummation: false
      });
    } else {
      $("#game-carousel").featureCarousel({
        autoPlay: false,
        largeFeatureWidth :   0.7,
        largeFeatureHeight:		0.7,
        smallFeatureWidth:    0.5,
        smallFeatureHeight:		0.5,
        sidePadding:          40,
        trackerIndividual: false,
        trackerSummation: false
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


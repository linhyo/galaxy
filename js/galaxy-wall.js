$(document).ready(function () {

  var wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

  var owlSlide = $('#galaxy-carousel');

  owlSlide.owlCarousel({
    slideSpeed: 500,
    items: 1,
    loop: false,
    dots: false
  });

  $('.banner-btn.red').on('click', function() {
    owlSlide.trigger('next.owl.carousel');
  });

  $('.scroll-block').slimScroll({
    height: '300px'
  });

  $('.walls').masonry({
    // options
    itemSelector: '.wall-item',
    columnWidth: 380,
    fitWidth: true
  });

});

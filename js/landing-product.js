$(document).ready(function () {

  var testimonial = $('.testimonial-slide');

  testimonial.owlCarousel({
    slideSpeed: 300,
    items: 1,
    dots: false,
    nav: true,
    navText: [
      "<i class='testimonial-prev'></i>",
      "<i class='testimonial-next'></i>"
    ],
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 2000
  });

  var bannerScroll = $('.banner-text .scroll-wrapper');

  $(window).resize(function(){
    var width = $(window).width();
    if(width >= 1200){
      bannerScroll.slimScroll({
        color: '#fff',
        height: '190px',
        alwaysVisible: false
      });
    } else if (width >= 992 && width < 1200) {
      bannerScroll.slimScroll({
        color: '#fff',
        height: '170px',
        alwaysVisible: false
      });
    } else {
      bannerScroll.slimScroll({
        color: '#fff',
        height: '140px',
        alwaysVisible: false
      });
    }
  }).resize();//trigger the resize event on page load.

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
});
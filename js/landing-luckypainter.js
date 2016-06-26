$(document).ready(function () {
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

  var tab1 = $('#lucky-painter-header');
  var tab2 = $('#lucky-painter-header-content');
  var tab3 = $('#lucky-painter-header-register');
  tab2.hide();
  tab3.hide();
  $('.scroll-block').slimScroll({
    height: '340px'
  });
  tab1.find('.btn-content-event').click(function (e) {
    e.preventDefault();
    $(this).parents('#lucky-painter-header').animate({width: "100%", left: '3%', 'z-index': '1'}, '500')
      .animate({left: '-95%'}, '500');

    setTimeout(function () {
      tab1.hide();
      tab2.show();
      tab2.css('left', '105%')
        .css('width', '100%')
        .css('position', 'relative');
      tab2.animate({left: '5%'}, '500')
        .animate({width: '100%', left: '0'}, '500');
    }, '500');
  });

  tab1.find('.btn-register').click(function (e) {
    e.preventDefault();
    $(this).parents('#lucky-painter-header').animate({width: "100%", left: '3%', 'z-index': '1'}, '500')
      .animate({left: '115%'}, '500');

    setTimeout(function () {
      tab1.hide();
      tab3.show();
      tab3.css('left', '-95%')
        .css('width', '100%')
        .css('position', 'relative');
      tab3.animate({left: '5%'}, '500')
        .animate({width: '100%', left: '0'}, '500');
    }, '500');
  });

  tab2.find('.btn-prev-block1').click(function (e) {
    e.preventDefault();
    $(this).parents('#lucky-painter-header-content').animate({width: "100%", left: '3%'}, '500')
      .animate({left: '115%'}, '500');

    setTimeout(function () {
      tab2.hide();
      tab1.show();
      tab1.css('left', '-95%')
        .css('width', '100%')
        .css('z-index', '1')
        .css('position', 'relative');
      tab1.animate({left: '5%'}, '500')
        .animate({width: '100%', left: '0'}, '500');
    }, '500');
  });

  tab3.find('.btn-prev-block2').click(function (e) {
    e.preventDefault();
    $(this).parents('#lucky-painter-header-register').animate({width: "100%", left: '3%'}, '500')
      .animate({left: '-95%'}, '500');

    setTimeout(function () {
      tab3.hide();
      tab1.show();
      tab1.css('left', '105%')
        .css('width', '100%')
        .css('z-index', '1')
        .css('position', 'relative');
      tab1.animate({left: '5%'}, '500')
        .animate({width: '100%', left: '0'}, '500');
    }, '500');
  });

  $('.btn-submit').click(function(e){
    e.preventDefault();
    $(this).parents('.register-form').animate({width: "100%", left: '3%'}, '500')
      .animate({left: '-95%'}, '500');

    setTimeout(function () {
      $('.register-form').hide();
      $('.register-success').show();
      $('.register-success').css('left', '105%')
        .css('width', '100%')
        .css('position', 'relative');
      $('.register-success').animate({left: '5%'}, '500')
        .animate({width: '100%', left: '0'}, '500');
    }, '500');
  });
});

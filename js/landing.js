(function () {
// Slick Slider
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    infinite: true,
    //speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    autoplay: true,
    autoplaySpeed: 1500
  });

  var colors = [[240,181,185],
    [237,180,186],
    [201,172,192],
    [145,160,199],
    [116,153,205],
    [114,153,204]];

  var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
  var colorIndices = [0,1,2,3];

//transition speed
  var gradientSpeed = 0.02;

  function updateGradient() {

    if ( $===undefined ) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb("+r1+","+g1+","+b1+")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb("+r2+","+g2+","+b2+")";

    $('.landing-quiz').css({
      background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];

      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

    }
  }
  setInterval(updateGradient,10);

  $('#galaxy-decoration .banner-person').on('click', function(e) {
    e.preventDefault();
    var tab = $(this).attr('href');
    var tabName = tab.slice(1,8);
    $('.story-detail').not(tab).hide();
    $(tab).fadeIn();
    $(this).addClass('active').siblings().removeClass('active');
    $('[data-box="'+ tabName +'"]').removeClass('hidden-elm').siblings().addClass('hidden-elm');
  });

  function fadeEffect(elm, effect) {
    $(elm).addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(elm).removeClass(effect + ' animated');
    });
  }

  $('.landing-product .product-img').hover(function () {
    var smear = $(this).find('.paint-smear');
    smear.fadeIn();
    fadeEffect(smear, 'fadeInLeft');
  }, function(){
    var smear = $(this).find('.paint-smear');
    fadeEffect(smear, 'fadeOutRight');
    smear.fadeOut();

    setTimeout(function () {
      smear.removeClass('fadeOutRight animated');
    }, 500);
  });
})();
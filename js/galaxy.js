(function () {
  // Carousel Slider
  $('.carousel').carousel();

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

  var image = [
    {
      id: 1,
      src: "images/banner-change/10.png"
    },
    {
      id: 2,
      src: "images/banner-change/9.png"
    },
    {
      id: 3,
      src: "images/banner-change/8.png"
    },
    {
      id: 4,
      src: "images/banner-change/7.png"
    },
    {
      id: 5,
      src: "images/banner-change/6.png"
    },
    {
      id: 6,
      src: "images/banner-change/5.png"
    },
    {
      id: 7,
      src: "images/banner-change/4.png"
    },
    {
      id: 8,
      src: "images/banner-change/3.png"
    },
    {
      id: 9,
      src: "images/banner-change/2.png"
    },
    {
      id: 10,
      src: "images/banner-change/13.png"
    },
    {
      id: 11,
      src: "images/banner-change/12.png"
    },
    {
      id: 12,
      src: "images/banner-change/11.png"
    }
  ];

  // Homepage: Petal effect (Click each petal to change wall paint color)
  function anim(effect) {
    $('#galaxyBanner').removeClass().addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
  }

  $('.color-flower .petal').on('click', function () {
    var petalId = $(this).attr('id');
    console.log(petalId);
    var src = '';
    for (var i = 0; i < image.length; i++) {
      if (petalId == image[i].id) {
        src = image[i].src;
      }
    }

    setTimeout(function () {
      $('#galaxyBanner').css('background-image', 'url(' + src + ')');
      anim('fadeIn')
    }, 100);
  });


  // Change banner for each selected tab ( T? V?N TRANG TRÍ )
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("href");
    var banner = $('#top-banner');

    if (target == '#color-trends') {
      banner.removeClass().addClass('color-trend-banner');
    } else if (target == '#color-palette') {
      banner.removeClass().addClass('color-palette-banner');
    } else if (target == '#painting-house') {
      banner.removeClass().addClass('painting-house-banner');
    }
  });

  // Select event
  $('.dropdown-menu > li > a').on('click', function(e) {
    e.preventDefault();
    var option = $(this).text();
    var btnDropdown = $(this).parents('ul.dropdown-menu').prev();
    btnDropdown.find('.dropdown-hint').remove();
    btnDropdown.find('.selected-value').text(option);
  });

  $('.product-detail-menu > li > a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().addClass('current');
    $(this).parent().siblings().removeClass('current');
    var tab = $(this).attr('href');
    $('.product-detail-menu-content').not(tab).hide();
    $(tab).fadeIn();
  });

  $('#support-page .galaxy-suggestion').on('click', function(e) {
    e.preventDefault();
    var tab = $(this).attr('href');
    $('.support-tab-wrapper').not(tab).hide();
    $(tab).fadeIn();

    // Change banner for each selected tab ( H? TR? )
    var banner = $('#top-banner');
    if (tab == '#paint-calculator') {
      banner.removeClass().addClass('paint-calculator-banner');
    } else if (tab == '#nearest-agency') {
      banner.removeClass().addClass('nearest-agency-banner');
    }
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

})();


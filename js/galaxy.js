(function () {
  // Carousel Slider
  $('.carousel').carousel();

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
    console.log(tab);
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

  //Slick for decor name
  var listDecorName = ['painting1', 'painting2', 'painting3', 'painting4', 'painting5', 'painting6', 'painting7', 'painting8'];
  var filterListDecor = function (name) {
    $('#' + name).slick({
      nextArrow: $('.'+ name +' .nextArrow'),
      prevArrow: $('.'+ name +' .prevArrow')
    });
  };
  _.forEach(listDecorName, function(name){
    filterListDecor(name);
  });
  $('a[data-toggle=tab]').each(function () {
    var $this = $(this);
    $this.on('shown.bs.tab', function () {
      _.forEach(listDecorName, function(name){
        filterListDecor(name);
      });
    });
  });

})();


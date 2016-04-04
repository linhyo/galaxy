(function () {
  // Carousel Slider
  $('.carousel').carousel();
  $('[data-toggle="tooltip"]').tooltip();

  $('.navbar-nav > li.navbar-dropdown').on('click', function () {
    $(this).siblings().find('ul').hide();
    $(this).toggleClass('show').find('ul').toggle();
  });

  $('.expand-image').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('hide-item');
    $(this).closest('.slick-track').find('.view-guide').toggleClass('hide-item');
    $(this).closest('.slick-track').find('.decor-content').toggleClass('hide-item').find('p').toggleClass('hide-item');
  });

  var event = (navigator.userAgent.match(/iPad/i)) ? "touchend" : "mouseup";
  $('body').on(event, function (e) {
    var popup = $('.navbar-menu');

    if (!$('.navbar-nav > li.navbar-dropdown').is(e.target) && !$('.navbar-nav > li.navbar-dropdown > a').is(e.target)
      && !popup.is(e.target) && popup.has(e.target).length == 0) {
      popup.hide();
    }
  });

  var image = [
    {
      id: 1,
      color: "#1b87c0"
    },
    {
      id: 2,
      color: "#013eae"
    },
    {
      id: 3,
      color: "#6340a8"
    },
    {
      id: 4,
      color: "#9764a2"
    },
    {
      id: 5,
      color: "#ab3066"
    },
    {
      id: 6,
      color: "#ea5e91"
    },
    {
      id: 7,
      color: "#ea2627"
    },
    {
      id: 8,
      color: "#f17d1d"
    },
    {
      id: 9,
      color: "#fff176"
    },
    {
      id: 10,
      color: "#a6cf0b"
    },
    {
      id: 11,
      color: "#50c308"
    },
    {
      id: 12,
      color: "#75c2e8"
    }
  ];

  // Homepage: Petal effect (Click each petal to change wall paint color)
  function anim(effect) {
    $('#galaxyBanner').removeClass().addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass();
    });
  }

  $('.color-flower .petal').on('click', function () {
    var petalId = $(this).attr('id');
    var color = '';
    for (var i = 0; i < image.length; i++) {
      if (petalId == image[i].id) {
        color = image[i].color;
      }
    }
    $('#galaxyBanner').css('background-color', color);
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
  $('.dropdown-menu > li > a').on('click', function (e) {
    e.preventDefault();
    var option = $(this).text();
    var btnDropdown = $(this).parents('ul.dropdown-menu').prev();
    btnDropdown.find('.dropdown-hint').remove();
    btnDropdown.find('.selected-value').text(option);
  });

  $('.product-detail-menu > li > a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().addClass('current');
    $(this).parent().siblings().removeClass('current');
    var tab = $(this).attr('href');
    $('.product-detail-menu-content').not(tab).hide();
    $(tab).fadeIn();
  });

  $('#support-page .galaxy-suggestion').on('click', function (e) {
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
})();


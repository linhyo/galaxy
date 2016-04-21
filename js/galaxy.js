(function () {

  $(window).load(function() {
    $(".overlay").fadeOut(3500);
  });

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

  $('.submenu-button').on('click', function() {
    $(this).next().toggle();
  });

  var event = (navigator.userAgent.match(/iPad/i)) ? "touchend" : "mouseup";
  $('body').on(event, function (e) {
    var popup = $('.navbar-menu');
    var pop = $('.submenu-list');

    if (!$('.navbar-nav > li.navbar-dropdown').is(e.target) && !$('.navbar-nav > li.navbar-dropdown > a').is(e.target)
      && !popup.is(e.target) && popup.has(e.target).length == 0) {
      popup.hide();
    }

    if (!$('.submenu-dropdown .submenu-button').is(e.target) && !$('.submenu-dropdown .selected-value').is(e.target)
        && !pop.is(e.target) && pop.has(e.target).length == 0) {
      pop.hide();
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

  // Change banner for each selected tab
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

  var map, marker, infowindow;
  var content1 = '<strong>Công ty cổ phần Galaxy Việt Nam</strong><br>Tầng 6 – Tòa nhà Viễn Đông, 36 Hoàng Cầu, Đống Đa, Hà Nội<br>';
  var content2 = '<strong>Địa chỉ nhà máy</strong><br>Lô 48, KCN Quang Minh, Mê Linh, Hà Nội<br>';
  var content3 = '<strong>Chi nhánh thành phố Hồ Chí Minh</strong><br>Tòa nhà Viễn Đông, 14 Phan Tôn, Phường Đa Kao, quận 1, Tp. Hồ Chí Minh<br>';
  var content4 = '<strong>Chi nhánh Đà Nẵng</strong><br>29 Hoàng Văn Thái - Q. Liên Chiểu - TP. Đà Nẵng<br>';

  function initMap(lat, long, cont) {
    map = new google.maps.Map(document.getElementById('gmap_canvas'), {
      zoom: 17,
      center: new google.maps.LatLng(lat, long),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(lat, long)
    });

    infowindow = new google.maps.InfoWindow({
      content: cont
    });

    marker.addListener('click', function() {
      infowindow.open(marker.get('map'), marker);
    });

    infowindow.open(map, marker);
  }

  // Init
  google.maps.event.addDomListener(window, 'load', initMap(21.0197702, 105.82317450000005, content1));

  $("#address-1").on('click', function () {
    google.maps.event.addDomListener(window, 'load', initMap(21.0197702, 105.82317450000005, content1));
  });

  $("#address-2").on('click', function () {
    google.maps.event.addDomListener(window, 'load', initMap(21.1601408, 105.7380511, content2));
  });

  $("#address-3").on('click', function () {
    google.maps.event.addDomListener(window, 'load', initMap(10.790240628237548, 106.69598562392525, content3));
  });

  $("#address-4").on('click', function () {
    google.maps.event.addDomListener(window, 'load', initMap(16.0539471, 108.158773, content4));
  });

})();


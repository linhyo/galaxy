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

})();


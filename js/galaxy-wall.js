$(window).load( function() {
  $('.walls').masonry({
    //fitWidth: true,
    itemSelector: '.wall-item',
    columnWidth: '.wall-sizer',
    percentPosition: true
  });
});

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

  $(window).resize(function(){
    var width = $(window).width();
    if(width >= 768){
      $('.scroll-block').slimScroll({
        height: '400px',
        alwaysVisible: true
      });
    } else{
      $('.scroll-block').slimScroll({
        height: '500px',
        alwaysVisible: true
      });

    }
  }).resize();//trigger the resize event on page load.

  $('.gw-scroll').slimScroll({
    height: '150px',
    alwaysVisible: true
  });

  $('#viewAndShare').on('show.bs.modal', function (event) {
    var item = $(event.relatedTarget);
    var source = item.data('image');
    var modal = $(this);
    modal.find('.gw-image img').attr('src', source);
  });

  $('.btn-joinow').on('click', function () {
    $(this).parent().hide();
    $(this).parent().next().show();
  });

  $('.btn-sendimage').on('click', function (e) {
    e.preventDefault();
    $('.rule-1, .rule-2').hide();
    $('.rule-3').show();
  });

  $('.btn-close').on('click', function (e) {
    e.preventDefault();
    $('.rule-2, .rule-3').hide();
    $('.rule-1').show();
  });

  //check if browser supports file api and filereader features
  if (window.File && window.FileReader && window.FileList && window.Blob) {

    //this function is called when the input loads an image
    function renderImage(file) {
      var reader = new FileReader();
      reader.onload = function (event) {
        var the_url = event.target.result;

        if (file.type.match('image.*')) {
          $('#holder').addClass('holder-hover').find('.holder-image').html("<img src='" + the_url + "' />");
          $('#holder').find('.holder-camera').css('opacity','0');
        } else {
          alert('File này ko phải là ảnh.');
        }
      };

      //when the file is read it triggers the onload event above.
      reader.readAsDataURL(file);
    }

    //watch for change on the
    $("#upload-photo").change(function () {
      //grab the first image in the fileList
      //in this example we are only loading one file.
      renderImage(this.files[0]);

    });
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }

  $('#holder').on('click', function(e) {
    e.preventDefault();
    $("#upload-photo").trigger('click');
  });

  // Drag and drop file
  var holder = document.getElementById('holder');

  holder.ondragover = function () {
    return false;
  };
  holder.ondragend = function () {
    return false;
  };
  holder.ondrop = function (e) {
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    renderImage(file);

    return false;
  };

});

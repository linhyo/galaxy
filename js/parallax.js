$(document).ready(function() {
  if (!device.isTouchScreen) {
    parallax.init();
  }
});

/*
 JavaScript for the demo: Recreating the Nikebetterworld.com Parallax Demo
 Demo: Recreating the Nikebetterworld.com Parallax Demo
 Author: Ian Lunn
 Author URL: http://www.ianlunn.co.uk/
 Demo URL: http://www.ianlunn.co.uk/demos/recreate-nikebetterworld-parallax/
 Tutorial URL: http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/

 License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.

 Dual licensed under the MIT and GPL licenses:
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html
 */
//save selectors as variables to increase performance
var parallax = {
  init: function() {
    $('nav ul, #logo, #conheca-contibier').localScroll({
      onAfter: function (anchor) {
        _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/'+anchor.id]);
      },
      onBefore: function(){
        closeSubAreas.init();
      }
    });

    var $window = $(window),
      $firstBG = $('#home'),
      $secondBG = $('#produtos'),
      $thirdBG = $('#fabricacao'),
      $fourthBG = $('#eventos'),
      $fifthBG = $('#campanhas'),
      $sixthBG = $('#churrascometro'),
      tampinhas = $("#produtos .tampinhas"),
      copos = $("#fabricacao .copos"),
      latinha = $("#eventos .lata"),
      camera = $("#campanhas .camera"),
      litrobier = $("#churrascometro .litrobier"),
      ice = $("#churrascometro .ice"),
      windowHeight,
      xfator,
      comp;

    //apply the class "inview" to a section that is in the viewport
    $('#home, #produtos, #fabricacao, #eventos, #campanhas, #churrascometro').bind('inview', function (event, visible) {
      if (visible == true) {
        $(this).addClass("inview");
      } else {
        $(this).removeClass("inview");
      }
    });

    //function that is called for every pixel the user scrolls. Determines the position of the background
    /*arguments:
     x = horizontal position of background
     windowHeight = height of the viewport
     pos = position of the scrollbar
     adjuster = adjust the position of the background
     inertia = how fast the background moves in relation to scrolling
     */
    function newPos(x, windowHeight, pos, adjuster, inertia){
      //console.log('altura: '+windowHeight+' , posScroll: '+pos+' .Total: '((windowHeight + pos) - 240) * 0.3);
      return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
    }

    function newPosTop(windowHeight, pos, adjuster, inertia){
      //console.log('altura: '+windowHeight+' , posScroll: '+pos+' .Total: '((windowHeight + pos) - 240) * 0.3);
      return (-((windowHeight + pos) - adjuster) * inertia)  + "px";
    }

    //function to be called whenever the window is scrolled or resized
    function Move(){
      windowHeight = $window.height();
      if(windowHeight < 700){
        xfator = 1.15;
        comp = 100;
      }else if(windowHeight > 700 && windowHeight < 850){
        xfator = 1.06;
        comp = 50;
      }else if(windowHeight > 850 && windowHeight < 1000){
        xfator = 1.01;
        comp = 30;
      }else{
        xfator = 1.00;
        comp = 30;
      }
      var pos = $window.scrollTop(); //position of the scrollbar

      //home...
      if($firstBG.hasClass("inview")){
        //call the newPos function and change the background position
        $firstBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 240, 0.3)});
      }

      //produtos...
      if($secondBG.hasClass("inview")){
        //call the newPos function and change the background position
        $secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 500, 0.2)});
        //call the newPosTop function and change the top position
        tampinhas.css({'top': newPosTop(windowHeight, pos, ((1750-comp*0.5)/xfator), 0.95)});
      }

      //fabricacao...
      if($thirdBG.hasClass("inview")){
        //call the newPos function and change the background position
        $thirdBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 2650, 0.3)});
        //call the newPosTop function and change the top position
        copos.css({'top': newPosTop(windowHeight, pos, ((2700+(comp*1.5))/xfator), 0.95)});
      }

      //eventos...
      if($fourthBG.hasClass("inview")){
        //call the newPos function and change the background position for CSS3 multiple backgrounds
        $fourthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 3550, 0.3)});
        //call the newPosTop function and change the top position
        latinha.css({'top': newPosTop(windowHeight, pos, ((3600+(comp*3))/xfator), 0.95)});
      }

      //campanhas...
      if($fifthBG.hasClass("inview")){
        //call the newPos function and change the background position for CSS3 multiple backgrounds
        $fifthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 4650, 0.3)});
        //call the newPosTop function and change the top position
        camera.css({'top': newPosTop(windowHeight, pos, ((4400+(comp*4.5))/xfator), 0.80)});
      }

      //churrascometro...
      if($sixthBG.hasClass("inview")){
        //call the newPos function and change the background position for CSS3 multiple backgrounds
        $sixthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 5550, 0.3)});
        //call the newPosTop function and change the top position
        litrobier.css({'top': newPosTop(windowHeight, pos, ((5600+(comp*5.5))/xfator), 0.8)});
        ice.css({'top': newPosTop(windowHeight, pos, (8000/xfator), 0.4)});
      }
    }

    $window.resize(function(){ //if the user resizes the window...
      Move(); //move the background images in relation to the movement of the scrollbar
    });

    $window.bind('scroll', function(){ //when the user is scrolling...
      Move(); //move the background images in relation to the movement of the scrollbar
    });
  }
};
$(document).ready(function() {

  if (!device.isTouchScreen) {
    parallax.init();
  }
  eventos.init();
  imprensa.init();
  footer.init();
  churrascometro.init();
  produtos.init();
  fabricacao.init();
  cadastro.init();
  faleconosco.init();
  mask.init();
  formEnhancements.init();
  tageamento.init();
  galeriaGa.init();

  if ($('body').hasClass('ff')) {
    formPlaceholder.init();
  }
});

//function close footer
var closeSubAreas = {
  init: function() {
    $("#background, .sub-areas").hide();
    $(".cooler").show();
    $("#cadastro").hide();
  }
}

var formPlaceholder = {
  init: function() {
    //Form cadastro for ie
    $('#form-cadastro input.input-text').focus(function() {
      $(this).css({backgroundPosition: '5px bottom'});
    });

    $('#form-cadastro input.input-text').each(function(){
      var noplace = $(this);
      noplace.blur(function() {
        var valor = noplace.val().length;
        var txtname = noplace.attr('name');
        if(valor < 1 || !valor || valor == 'undefined' || valor == 0 || valor == '0'){
          //noplace.attr({style:''});
          if(txtname == 'name'){
            noplace.css({backgroundPosition: '5px 5px'});
          }
          if(txtname == 'cpf'){
            noplace.css({backgroundPosition: '5px -20px'});
          }
          if(txtname == 'birthdate'){
            noplace.css({backgroundPosition: '5px -45px'});
          }
          if(txtname == 'address'){
            noplace.css({backgroundPosition: '5px -70px'});
          }
          if(txtname == 'city'){
            noplace.css({backgroundPosition: '5px -95px'});
          }
          if(txtname == 'state'){
            noplace.css({backgroundPosition: '5px -120px'});
          }
          if(txtname == 'zip'){
            noplace.css({backgroundPosition: '5px -145px'});
          }
          if(txtname == 'home_phone'){
            noplace.css({backgroundPosition: '5px -170px'});
          }
          if(txtname == 'mobile_phone'){
            noplace.css({backgroundPosition: '5px -195px'});
          }
          if(txtname == 'email'){
            noplace.css({backgroundPosition: '5px -220px'});
          }
          if(txtname == 'twitter'){
            noplace.css({backgroundPosition: '5px -245px'});
          }
          if(txtname == 'complement'){
            noplace.css({backgroundPosition: '5px -270px'});
          }
          if(txtname == 'country'){
            noplace.css({backgroundPosition: '5px -297px'});
          }
        }
      });
    });

    //Form faleconosco for ie
    $('#form-faleconosco input.input-text').focus(function() {
      $(this).css({backgroundPosition: '5px bottom'});
    });

    $('#form-faleconosco input.input-text').each(function(){
      var noplace = $(this);
      noplace.blur(function() {
        var valor = noplace.val().length;
        var txtname = noplace.attr('name');
        var txtclasse = noplace.attr('class');
        if(valor < 1 || !valor || valor == 'undefined' || valor == 0 || valor == '0'){
          //noplace.attr({style:''});
          if(txtname == 'name'){
            noplace.css({backgroundPosition: '5px 5px'});
          }
          if(txtname == 'cpf'){
            noplace.css({backgroundPosition: '5px -20px'});
          }
          if(txtname == 'birthdate'){
            noplace.css({backgroundPosition: '5px -45px'});
          }
          if(txtname == 'address'){
            noplace.css({backgroundPosition: '5px -70px'});
          }
          if(txtname == 'complement'){
            noplace.css({backgroundPosition: '5px -295px'});
          }
          if(txtname == 'city'){
            noplace.css({backgroundPosition: '5px -95px'});
          }
          if(txtname == 'state'){
            noplace.css({backgroundPosition: '5px -120px'});
          }
          if(txtname == 'country'){
            noplace.css({backgroundPosition: '5px -270px'});
          }
          if(txtname == 'zip'){
            noplace.css({backgroundPosition: '5px -145px'});
          }
          if(txtname == 'home_phone'){
            noplace.css({backgroundPosition: '5px -170px'});
          }
          if(txtname == 'mobile_phone'){
            noplace.css({backgroundPosition: '5px -195px'});
          }
          if(txtname == 'email'){
            noplace.css({backgroundPosition: '5px -220px'});
          }
        }
      });
    });

    $('#form-faleconosco .message-ie').focus(function() {
      $(this).css({backgroundPosition: '5px -500px'});
    });

    $('#form-faleconosco .message-ie').each(function(){
      var noplace = $(this);
      noplace.blur(function() {
        var valor = noplace.val().length;
        var txtname = noplace.attr('name');
        if(valor < 1 || !valor || valor == 'undefined' || valor == 0 || valor == '0'){
          //noplace.attr({style:''});
          noplace.css({backgroundPosition: '5px -320px'});
        }
      });
    });

    //form churrascometro enviar email
    $('#resultado-email-form input.input-text').focus(function() {
      $(this).css({backgroundPosition: '5px -500px'});
    });

    $('#resultado-email-form input.input-text').each(function(){
      var noplace = $(this);
      noplace.blur(function() {
        var valor = noplace.val().length;
        var txtname = noplace.attr('name');
        if(valor < 1 || !valor || valor == 'undefined' || valor == 0 || valor == '0'){
          //noplace.attr({style:''});
          if(txtname == 'name'){
            noplace.css({backgroundPosition: '5px 5px'});
          }
          if(txtname == 'email'){
            noplace.css({backgroundPosition: '5px -220px'});
          }
        }
      });
    });
  }
}

var mask = {
  init: function() {
    $('input.cpf').mask('999.999.999-99');
    $("input.data").mask("99/99/9999");
    $("input.phone").mask("(99) 9999-9999");
    $("input.cep").mask("99999-999");
  }
}

var produtos = {
  init: function() {
    $('.conti_prod ul li a').unbind().clickPrevented(function(e){
      var parent = e.parent();
      $('.conti_prod ul li').removeClass('hover');
      $(parent).addClass("hover");
      var source = e.attr('href');
      var info = e.data('prod');
      var infoGa = 'conti-'+info;
      _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/produtos/'+infoGa]);
      $('#litrao,#bier,#litrinho,#latao,#chopp,#malzbier,#latinha,.intro-litrao,.intro-bier,.intro-litrinho,.intro-latao,.intro-chopp,.intro-malzbier,.intro-latinha').hide();
      $('#'+info).show();
      $('.intro-'+info).show();

      var altText = e.attr('title');
      $('#prod').attr({src:source,alt:altText});
    })
  }
}

var fabricacao = {
  init: function() {
    var w = $(window).width();
    var newLeft = (w/2)+990;
    $('.fab02').css({left:newLeft,marginTop:-574});
    $('#fabricacao .nav a').unbind().clickPrevented(function(e){
      $('#fabricacao .nav a').removeClass("hover");
      e.addClass("hover");
      var fabGa;
      if ( e.attr('data') === 'fab02'){
        fabGa = 'fabricacao';
        $('.fab02').animate({left:0});
        $('.fab01').animate({left:newLeft*-1});
      }else{
        fabGa = 'materia-prima';
        $('.fab02').animate({left:newLeft});
        $('.fab01').animate({left:0});
      }

      var item = e.attr('data');
      $('.'+item).show();
      $('#txt-fabricacao').jScrollPane({showArrows: true});

      _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/a-fabricacao/'+fabGa]);
    })
  }
}

var imprensa = {
  init: function() {
    imprensa.bindPager();
    imprensa.bindDetail();
    imprensa.bindBackToList();
    imprensa.bindClose();
  },

  bindPager: function() {
    $('.pager').clickPrevented(function(e){
      var page = e.data('page');
      $.get('/article', {page: page}, function (html) {
        $('#articles').html(html);
        $('#imprensa').show();
        imprensa.init();
      });
    })
  },

  bindDetail: function() {
    $('a.mostrar-lista-detalhe').clickPrevented(function (e) {
      var id = e.attr('data-id');
      $("#imprensa .lista, #imprensa .conteudo").hide();
      $("#imprensa .detalhe").show();
      $('.scroll-pane').jScrollPane({showArrows: true});//aqui
      $('#'+id).show();
      $('.scroll-pane').jScrollPane({showArrows: true});
    })
  },

  bindBackToList: function() {
    $('a.voltar-lista').clickPrevented(function () {
      $("#imprensa .detalhe").hide();
      $("#imprensa .lista").show();
      $('.scroll-pane').jScrollPane({showArrows: true});//aqui
    })
  },

  bindClose: function() {
    $('a.fechar-sub').clickPrevented(function (e) {
      $("#background, .sub-areas").hide();
    })
  }
}

var faleconosco = {
  init: function() {
    faleconosco.initValidator();
  },

  initValidator: function() {
    $('.fale-conosco').validate({
      errorContainer: $('#msg-error-faleconosco'),
      rules: {
        'name':{
          required: true
        },'cpf':{
          required: true
        },'birthdate':{
          required: false
        },'address':{
          required: false
        },'city':{
          required: false
        },'state':{
          required: false
        },'country':{
          required: false
        },'zip':{
          required: false
        },'home_phone':{
          required: false
        },
        'email':{
          required: true,
          email: true
        },
        'subject':{
          required: true
        },
        'message':{
          required: true
        },
        'termos':{
          required: false
        }

      },
      submitHandler: function(form) {
        $.post('/contact/send', $('#form-faleconosco').serialize(), function (json) {
          if (json.success === true){
            $("#msg-sucesso-faleconosco").show();
            $("#form-faleconosco")[0].reset();
            $("#form-faleconosco").find('label').removeClass('inputCheckboxChecked');
            _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/fale-conosco/enviar/sucesso']);
          }
          else {
            _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/fale-conosco/enviar/erro']);
            $('#msg-error-faleconosco').empty().append("Falha ao enviar mensagem. Tente novamente.");
            $("#msg-error-faleconosco").show();
          }
        });
      }
    })
  }
}

var cadastro = {
  init: function() {
    cadastro.initValidator();
    cadastro.bindOpen();
    cadastro.bindClose();
  },

  bindOpen: function() {
    $('a.mn_cadastro').clickPrevented(function (e) {
      if ($("#cadastro").is(":visible")) {
        $("#cadastro").hide();
      } else {
        $("#background,#distribuicao,#imprensa,#politica,#faleconosco, #cadastro #msg-sucesso-cadastro").hide();
        $("#cadastro").show();
        _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/cadastro']);
        $('html, body').animate({
          scrollTop: $("#cadastro").offset().top
        }, 1000);
      }
    })
  },

  bindClose: function() {
    $('a.fechar-cadastro').clickPrevented(function (e) {
      $("#cadastro").hide();
    })
  },

  initValidator: function() {
    $('.frm-cadastro').validate({
      errorContainer: $('#msg-error'),
      rules: {
        'name':{
          required: true
        },
        'cpf':{
          required: true
        },
        'birthdate':{
          required: true
        },
        'address':{
          required: true
        },
        'city':{
          required: true
        },
        'state':{
          required: true
        },
        'country':{
          required: true
        },
        'zip':{
          required: true
        },
        'email':{
          required: true,
          email: true
        },
        'termos':{
          required: true
        }
      },
      submitHandler: function(form) {
        var email = $('#form-cadastro').find('input[name="email"]').val(),
          cpf = $('#form-cadastro').find('input[name="cpf"]').val(),
          keys = JSON.stringify({email: email, cpf: cpf}),
          isValid = true;

        $.post('/register/check_unique', {keys: keys}, function (json) {
          $.each(json.data, function (key, value) {
            if (value === false) {
              //alert('Variável repetida: ' + key);
              $('#msg-error').empty().append("Atenção: " + key + " já cadastrado.");
              $("#msg-error").show();
              _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/cadastro/enviar/erro']);
              isValid = false;
            }
          });
          if (!isValid) return;

          $.post('/register/save', $('#form-cadastro').serialize(), function (json) {
            _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/cadastro/enviar/sucesso']);
            //alert('sucesso: ' + json.success);
            $("#msg-error").hide();
            $("#msg-sucesso-cadastro").show();
            $("#form-cadastro")[0].reset();
            $("#form-cadastro").find('label').removeClass('inputCheckboxChecked');
          });

        })
      }
    });
  }
};

var footer = {
  init: function() {
    footer.bindOpen();
    footer.bindClose();
  },

  bindOpen: function() {
    $('footer nav ul li a.nav-footer').clickPrevented(function (e) {
      var atributo = e.attr('data');

      var mnFooterGa = atributo;
      if(atributo == 'imprensa'){
        mnFooterGa = 'sala-de-imprensa';
      }
      if(atributo == 'politica'){
        mnFooterGa = 'politica-de-privacidade';
      }
      if(atributo == 'faleconosco'){
        mnFooterGa = 'fale-conosco';
      }
      if(atributo == 'faleconosco'){
        mnFooterGa = 'fale-conosco';
      }

      _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/'+mnFooterGa]);

      if (atributo == "politica" || atributo == "imprensa") {
        $('.scroll-pane').jScrollPane({showArrows: true});
      }

      if ($("#background").is(":visible")) {

        if ($("#" + atributo).is(":visible")) {
          $("#background, .sub-areas, #" + atributo).hide();
          $(".cooler").show();
        }

        else{
          $(".sub-areas, #cadastro, .cooler").hide();
          $("#" + atributo).show();
          $('.scroll-pane').jScrollPane({showArrows: true});//executa p politica direto
          if (atributo == "faleconosco") {
            $("#msg-sucesso-faleconosco").hide();
          }
        }
      }
      else {
        $("#background, #" + atributo).show();
        $('.scroll-pane').jScrollPane({showArrows: true});//executa p politica outros
        $("#cadastro, .cooler").hide();
        if (atributo == "faleconosco") {
          $("#msg-sucesso-faleconosco").hide();
        }
      }

    })

    $('.lista ul.artigos li a').clickPrevented(function (e) {
      var that = e;
      var noticia = eventos.removeAcento(that.find('h4').html());
      //var noticia = that.find('h4').html();
      _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/sala-de-imprensa/'+noticia]);
    })

    $('footer nav ul li a.btBlank').clickPrevented(function (e) {
      var blank = e.attr('data');
      var link = e.attr('href');
      _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/'+blank]);
      window.open(link);
    })
  },

  bindClose: function() {
    $('a.fechar-sub').clickPrevented(function (e) {
      $("#background, .sub-areas").hide();
      $(".cooler").show();
    })
  }
}

var eventos = {
  init: function() {
    eventos.bindList();
    eventos.bindScroll();
    eventos.bindDetail();
    eventos.bindGallery();
  },

  bindGallery: function() {
    new Gallery({ div: '#galeria', image: '#galeria', marginLeft: -119, imageWidth: 124, detail:false});
  },

  bindDetail: function() {
    $('.event-link').clickPrevented(function(e){
      var id = e.data('id');

      var title = eventos.removeAcento(e.attr('title'));
      eventos.attachTitle.titulo=title;
      //console.log(eventos.attachTitle.titulo);
      _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/eventos/'+title]);

      $.get('/event/show', {id: id}, function (html) {
        $('#view').html(html);
        eventos.bindGallery();
        galeriaGa.init();
        $('#detail').jScrollPane({showArrows: true});
      });
    })
  },

  attachTitle: {'titulo':''},

  removeAcento: function(text) {
    text = text.replace(new RegExp('[�?ÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[�?ÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;
  },

  bindScroll: function() {
    $('#detail').jScrollPane({showArrows: true});
  },

  bindList: function() {
    var pane = $('#events_list div.visor');
    pane.jScrollPane();
    var api = pane.data('jsp');
    $('.scroll_up').clickPrevented(function(e){
        api.scrollBy(-20,-20);
      }
    );

    $('.scroll_down').clickPrevented(function(e){
        api.scrollBy(20,20);
      }
    );
  }
}

var galeriaGa = {
  init: function() {
    $('#galeria-anuncios ul li div a').clickPrevented(function (e) {
      var link = e;
      var valorSpan = link.attr('data');
      var tipo = link.attr('data-id');
      _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/campanhas/'+tipo+'/'+valorSpan]);
    });

    $('#galeria ul li div a').clickPrevented(function (e) {
      var item = e;
      var ordem = item.attr('data-id');
      var title = eventos.attachTitle.titulo;
      if (title == ''){
        $('#preview-event h4').each(function(){
          var main = $(this);
          //texto = main.attr('title');
          texto = eventos.removeAcento(main.html());
          //texto = main.html();
          title = texto;
        });
      }
      _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/eventos/'+title+'/foto-'+ordem]);
    });

    $('#options a.btn-twitter').click(function (e) {
      var title = eventos.attachTitle.titulo;
      if (title == ''){
        $('#preview-event h4').each(function(){
          var main = $(this);
          texto = eventos.removeAcento(main.html());
          //texto = main.html();
          title = texto;
        });
      }
      _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/eventos/'+title+'/compartilhe/twitter']);
    });

    $('#options a.btn-face').click(function (e) {
      var title = eventos.attachTitle.titulo;
      if (title == ''){
        $('#preview-event h4').each(function(){
          var main = $(this);
          texto = eventos.removeAcento(main.html());
          //texto = main.html();
          title = texto;
        });
      }
      _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/eventos/'+title+'/compartilhe/facebook']);
    });
  }
}

Gallery = function (cfg) {
  this.mainDiv = $(cfg.div);
  var box = this.mainDiv.find('ul li div');
  this.items = box.find('a');
  this.marginLeft = cfg.marginLeft;
  this.imageWidth = cfg.imageWidth;
  this.image = $(cfg.image).find('#foto');
  if(cfg.detail){
    this.detail = $(cfg.image).find(cfg.detail);
  }

  var that = this;

  (function bindCarrosel() {
    var init = 0,
      min = 3,
      quant = 3,
      carroselSize = that.items.size();

    box.width(carroselSize*that.imageWidth);

    that.mainDiv.find('#bt_next').clickPrevented(function(e){
      if (quant != carroselSize && min < carroselSize && init < (carroselSize-min)){
        that.items.eq(init++).animate({"marginLeft":that.marginLeft}, "slow");
      };
    });

    that.mainDiv.find('#bt_prev').clickPrevented(function(e){
      if (init != 0){
        that.items.eq(--init).animate({"marginLeft":"5"}, "slow");
      };
    });
  })();

  (function bindImageDetail() {
    that.items.each(function(){
      var link = $(this);
      var source = link.attr('href');
      var valorSpan = link.attr('data');
      var campNome = link.attr('data-id');
      var titHtml = campNome+' <span>'+valorSpan +'</span>';

      link.clickPrevented(function(e){
        that.image.attr({src:source});
        if(cfg.detail){
          that.detail.attr({href:"camp_"+e.data('camp')+'.html'});
        }
        $('.campanhas-right p').empty().append(titHtml);
      });
    });
  })();

  if(cfg.detail){
    (function openDetModal(){
      $(that.detail).fancybox({
          'overlayColor'		: '#000',
          'overlayOpacity'	: 0.9,
          'scrolling'			: 'hidden'}
      );
    })();
  }

  (function bindShow() {
    $('#bt_fotos, a.bt_fechar').unbind().clickPrevented(function(e){
      if(that.mainDiv.is(':visible')) {
        that.mainDiv.hide();
      }
      else {
        that.mainDiv.show();
      }
    })
  })();
}

var churrascometro = {
  init: function() {
    churrascometro.initValidator();
    churrascometro.bindSteps();
    churrascometro.bindSlider();
    churrascometro.bindSendEmail();
    churrascometro.bindCloseEmail();
  },

  bindSteps: function() {
    var main = $('#churrascometro');
    churrascometro.showNext('convidados');

    $('.blur-yellow').css({color: '#FFD800'});
    $('.blur-yellow').focus(function() {
      $(this).css({color: '#FFD800'});
    });
    $('.blur-yellow').blur(function() {
      $(this).css({color: '#FFD800'});
      $('.blur-yellow').css({color: '#FFD800'});
    });

    main.find('.passo-churrascometro a.avancar').each(function(){
      $(this).clickPrevented(function (e) {
        var step = e.data('next-step');

        if (step == 'convidados') {
          $('#churrascometro-form')[0].reset();
          $('#churrascometro-form').find('label').removeClass('inputRadioChecked');
          $('.homens').val('nº');
          $('.mulheres').val('nº');
          _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/churrascometro/refazer']);
        }

        if (step == 'duracao') {
          if($('.homens').val() =='nº' && $('.mulheres').val() =='nº'){
            alert('Preencha o número de pessoas');
            return false;
          }
          _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/churrascometro/duracao']);
        }

        if (step == 'resposta') {
          var horas = $('input:checked').attr('value');
          if (horas == '2'){
            horas = 'ate-2-horas';
          }
          if (horas == '3'){
            horas = '3-horas';
          }
          if (horas == '4'){
            horas = '4-horas';
          }
          if (horas == '5'){
            horas = 'mais-5-horas';
          }
          //console.log(horas);

          if($('#duracao input:checked').length < 1){
            alert('Defina a duração do Evento');
            return false;
          }
          churrascometro.getResponse();
          //_gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/churrascometro/duracao/'+horas]);
          _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/churrascometro/resposta']);
        }
        churrascometro.showNext(step);
      })
    });

  },

  showNext: function(name) {
    var main = $('#churrascometro');
    main.find('.passo-churrascometro').hide();
    main.find('[class|="bg"]').hide();
    main.find('.bg-' + name).show();
    main.find('.bg-' + name).children().show();
    main.find('#' + name).show();
  },

  getResponse: function() {
    var params = $('#churrascometro-form').serialize();
    $.getJSON('/churrascometro/get_items', params, function(json) {
      churrascometro.fillItem('carne', json.data, toFixed, 1);
      churrascometro.fillItem('lata', json.data, Math.ceil);
      churrascometro.fillItem('latao', json.data, Math.ceil);
      churrascometro.fillItem('latinha', json.data, Math.ceil);
      churrascometro.fillItem('litrinho', json.data, Math.ceil);
      churrascometro.fillItem('bier', json.data, Math.ceil);
      churrascometro.fillItem('litro', json.data, Math.ceil);
      churrascometro.fillItem('refrigerantes', json.data, Math.ceil);
      churrascometro.fillItem('farofa', json.data, Math.ceil);
      churrascometro.fillItem('carvao', json.data, Math.ceil);
      churrascometro.fillItem('guardanapos', json.data, Math.ceil);
      churrascometro.fillItem('copos-plasticos', json.data, Math.ceil);
      churrascometro.fillItem('pratos', json.data, Math.ceil);

      churrascometro.showProduct(1);
    })

    function toFixed(number, precision) {
      return number.toFixed(precision);
    }
  },

  fillItem: function(name, items, fn, args) {
    var main = $('#churrascometro');
    var value = items[name];
    if (fn) value = fn(value, args)
    if(name =='lata' || name =='latao' || name =='bier' || name =='latinha' || name =='litrinho'){
      main.find('#qtd_' + name + ' div').html(value);
    }else if(name =='litro'){
      main.find('#' + name + ' div, #qtd_litrao div').html(value);
    }else{
      main.find('#' + name + ' div').html(value);
    }
  },

  bindSlider: function() {
    $( "#slider" ).slider({
      value: 0,
      min: 1,
      max: 6,
      step: 1,
      slide: function(e, ui) {
        churrascometro.showProduct(ui.value);
      }
    });
  },

  showProduct: function(step) {
    $('#embalagem div.type').hide();
    var tipo = step-1;
    $('#embalagem div.type:eq('+tipo+')').show().find('div').show();
  },

  bindSendEmail: function() {
    $('#open-enviar-email').clickPrevented(function (e) {
      e.addClass('hover');
      $("#enviar-por-email").show();
    });

    $('#send-enviar-email').clickPrevented(function (e) {
      churrascometro.initEmailChurrascometro();
      $('#resposta #msg-error, #resposta #msg-sucesso-churrascometro').hide();
      var params = $('#churrascometro-form').serialize();
      var email = $('form.enviar-resultado-email').serialize();
      $.post('/churrascometro/send_email', params + '&' + email, function (json) {
        //alert(json.success);
        if (json.success === true){
          $('#resposta #msg-error').hide();
          $('#resposta #msg-sucesso-churrascometro').show();
          _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/churrascometro/enviar-por-email/sucesso']);
        }
        else {
          $('#resposta #msg-sucesso-churrascometro').hide();
          $('#resposta #msg-error').show();
          _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/churrascometro/enviar-por-email/erro']);
        }
      });
    })

  },

  bindCloseEmail: function () {
    $('a#fechar-enviar-email').clickPrevented(function (e) {
      $("#enviar-por-email").hide();
      $("a.enviar-email").removeClass('hover');
      $('#resposta #msg-error, #resposta #msg-sucesso-churrascometro').hide();
      $('#resultado-email-form')[0].reset();
    })
  },

  initEmailChurrascometro: function () {
    campoNome = $('#resultado-email-form').find('input[name="name"]').val();
    if (campoNome == "" || campoNome.length < 3)
    {
      alert("Preencha seu NOME corretamente.");
      return false;
    }

    var campoEmail = $('#resultado-email-form').find('input[name="email"]').val();
    if (campoEmail == "" || campoEmail.indexOf('@') == -1 || campoEmail.indexOf('.') == -1)
    {
      alert("Preencha seu E-MAIL corretamente.");
      return false;
    }
    return true;
  },

  initValidator: function () {
    $('.number').keypress(function (e) {
      if (window.event) { //IE
        key = e.keyCode;
      }
      else if (e.which) { //FF
        key = e.which;
      }
      //teclas dos números(0 - 9) de 48 a 57
      //tecla==8 é para permitir o backspace funcionar para apagar
      return (key >= 48 && key <= 57) || (key == 8);
    });
  }
}

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
      tampinhas = $("#produtos .tampinhas"),
      $thirdBG = $('#fabricacao'),
      copos = $("#fabricacao .copos"),
      $fourthBG = $('#eventos'),
      latinha = $("#eventos .lata"),
      $fifthBG = $('#campanhas'),
      camera = $("#campanhas .camera"),
      $sixthBG = $('#churrascometro'),
    //termica = $("#churrascometro .termica"),
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
}

var formEnhancements = {
  init: function(){
    //checkbox and radio.
    $("input:checkbox").styleRadioCheckbox({
      classChecked:"inputCheckboxChecked",
      classFocus:"inputFocus"
    });
    $("input:radio").styleRadioCheckbox({
      classChecked:"inputRadioChecked",
      classFocus:"inputFocus"
    });
  }
}

var tageamento = {
  init: function(){
    //home
    $('a.twitter').unbind().click(function(){
      _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/home/twitter']);
    });
    $('a.facebook').unbind().click(function(){
      _gaq.push(['_trackEvent', 'Conti Bier', 'clique', '/home/facebook']);
    });
  }
}

$.fn.extend({clickPrevented: function(fn) {
  $(this).click(function(e) {
    e.preventDefault();
    fn($(this));
  });
}});

var parseQueryString = function(q) {
  var urlParams = {},
    e,
    a = /\+/g,  // Regex for replacing addition symbol with a space
    r = /([^&;=]+)=?([^&;]*)/g,
    d = function (s) { return decodeURIComponent(s.replace(a, " ")); }

  while (e = r.exec(q))
    urlParams[d(e[1])] = d(e[2]);

  return urlParams;
};
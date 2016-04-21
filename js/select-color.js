(function () {
  String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
      if (m == "{{") {
        return "{";
      }
      if (m == "}}") {
        return "}";
      }
      return args[n] ? args[n] : "";
    });
  };

  var list_color;
  list_color = [
    {
      name: 'red-color',
      listId: [
        {
          id: 'red_1',
          listColor: [
            {
              id: '5f423f',
              colorId: '#5f423f',
              colorName: '5f423f'
            },
            {
              id: '6c4143',
              colorId: '#6c4143',
              colorName: '6c4143'
            },
            {
              id: '855a56',
              colorId: '#855a56',
              colorName: '855a56'
            },
            {
              id: 'ba999b',
              colorId: '#ba999b',
              colorName: 'ba999b'
            },
            {
              id: '53423f',
              colorId: '#53423f',
              colorName: '53423f'
            },
            {
              id: '2c4143',
              colorId: '#2c4143',
              colorName: '2c4143'
            },
            {
              id: '855b56',
              colorId: '#855b56',
              colorName: '855b56'
            },
            {
              id: 'ba998b',
              colorId: '#ba998b',
              colorName: 'ba998b'
            }
          ]
        },
        {
          id: 'red_2',
          listColor: [
            {
              id: 'ba8d93',
              colorId: '#ba8d93',
              colorName: 'ba8d93'
            },
            {
              id: 'cfaaaf',
              colorId: '#cfaaaf',
              colorName: 'cfaaaf'
            },
            {
              id: 'cfaaff',
              colorId: '#cfaaff',
              colorName: 'cfaaff'
            },
            {
              id: 'e6cfd2',
              colorId: '#e6cfd2',
              colorName: 'e6cfd2'
            }
          ]
        }
      ]
    },
    {
      name: 'orange-color',
      listId: []
    },
    {
      name: 'yellow-color',
      listId: []
    },
    {
      name: 'green-color',
      listId: []
    },
    {
      name: 'blue-color',
      listId: []
    },
    {
      name: 'purple-color',
      listId: []
    },
    {
      name: 'brown-color',
      listId: []
    },
    {
      name: 'dark-color',
      listId: []
    },
    {
      name: 'light-color',
      listId: []
    }
  ];

  var templateMainTab = '<li><a href="#{0}" data-toggle="tab"><span class="{0}"></span></a></li>';

  var templateMainContent = '';
  templateMainContent += '<div class="tab-pane" id="{0}">';
  templateMainContent += '  <div class="sub-level">';
  templateMainContent += '  <div class="row">';
  templateMainContent += '  <div class="col-xs-3">';
  templateMainContent += '  <ul class="nav nav-tabs"></ul>';
  templateMainContent += '  </div>';
  templateMainContent += '  <div class="col-xs-9">';
  templateMainContent += '  <div class="tab-content"></div>';
  templateMainContent += '  </div>';
  templateMainContent += '  </div>';
  templateMainContent += '  </div>';
  templateMainContent += '  </div>';

  var templateSubMenu = '<li><a href="#{0}" data-id="{0}" data-toggle="tab"><div class="display-review-color"></div></a></li>';

  var templateTabContent = '';
  templateTabContent += '<div class="tab-pane" id="{0}">';
  templateTabContent += ' <div class="display-color">';
  templateTabContent += ' </div>';
  templateTabContent += ' <div class="display-content">';
  templateTabContent += '  <div class="display-list-color">';
  templateTabContent += '   </div>';
  templateTabContent += ' </div>';
  templateTabContent += '</div>';

  var templateProfileColor = '';
  templateProfileColor += '<div class="profile-color" id="{0}" data-color-code="{1}" data-color-name="{2}">';
  templateProfileColor += '  <span style="background-color: {1}"></span>';
  templateProfileColor += '  <p class="name-color">';
  templateProfileColor += '  {2} - {1}';
  templateProfileColor += '  </p>';
  templateProfileColor += '  <i class="fa fa-heart btn-love"></i>';
  templateProfileColor += '</div>';

  var templateColor = '<span style="background-color: {0}"></span>';
  var templateColorContent = '<span class="color-content" data-color-code="{0}" style="background-color: {0}"></span>';

  for (var i = 0; i < list_color.length; i++) {
    var contentName = list_color[i].name;

    var widgetMainContent = templateMainContent.format(contentName);
    var widgetMainTab = templateMainTab.format(contentName);
    $('#mainTab').append(widgetMainTab);
    $('#mainTab li:first-child').addClass('active');

    $('#mainContent').append(widgetMainContent);
    $('#mainContent .tab-pane:first-child').addClass('active');
    for (var j = 0; j < list_color[i].listId.length; j++) {
      var idMainColor = $('#' + list_color[i].name);

      //Create navigation sub tabs
      var widgetSubMenu = templateSubMenu.format(list_color[i].listId[j].id);
      idMainColor.find('ul.nav-tabs').append(widgetSubMenu);
      idMainColor.find('ul.nav-tabs li:first-child').addClass('active');
      //Create sub tab content with each id
      var widgetTabPane = templateTabContent.format(list_color[i].listId[j].id);
      idMainColor.find('.tab-content').append(widgetTabPane);
      idMainColor.find('.tab-content .tab-pane:first-child').addClass('active');
      for (var k = 0; k < list_color[i].listId[j].listColor.length; k++) {
        //Append color in sub tabs
        var idSubTab = list_color[i].listId[j].id;
        var colorId = list_color[i].listId[j].listColor[k].id;
        var colorCode = list_color[i].listId[j].listColor[k].colorId;
        var colorName = list_color[i].listId[j].listColor[k].colorName;

        var widgetColor = templateColor.format(colorCode);
        var widgetColorContent = templateColorContent.format(colorCode);
        $('ul.nav-tabs li a[data-id=' + idSubTab + ']').find('.display-review-color').append(widgetColor);

        var findIdSubTab = $('#' + idSubTab);
        //Append color in tab pane
        findIdSubTab.find('.display-content .display-list-color').append(widgetColorContent);

        //Append profile color
        var widgetProfileColor = templateProfileColor.format(colorId, colorCode, colorName);
        findIdSubTab.find('.display-color').append(widgetProfileColor);
      }
    }
  }

  $('.color-content').click(function () {
    var colorCodeId = $(this).attr('data-color-code');
    $(this).parent().parent().prev().find('.profile-color').css('display', 'none');
    $('.profile-color' + colorCodeId).css('display', 'block');
  });

  var templateFavoriteColor = '';
  templateFavoriteColor += '<div class="col-lg-3 col-sm-4 col-xs-6">';
  templateFavoriteColor += '  <div class="is-love-color">';
  templateFavoriteColor += '    <span style="background-color: {0}"></span>';
  templateFavoriteColor += '    <p class="color-name-love">{1} - {0}</p>';
  templateFavoriteColor += '  </div>';
  templateFavoriteColor += '</div>';

  var colorFavorite = [];

  var appendFavoriteColor = function (favoriteColor) {
    var widgetFavoriteColor = '';
    for (var i = 0; i < favoriteColor.length; i++) {
      widgetFavoriteColor += templateFavoriteColor.format(favoriteColor[i].colorCode, favoriteColor[i].colorName);
    }

    if (favoriteColor.length) {
      $('#favorite_color .row').html('').append(widgetFavoriteColor);
    } else {
      $('#favorite_color .row').html('<div class="col-xs-12"><p class="no-result">Nhấn " <i class="fa fa-heart btn-love isLove"></i> " để thêm màu bạn thích.</p></div>');
    }
  };

  var templateSearchResultColor = '';
  templateSearchResultColor += '<div class="col-xs-12 col-sm-6 col-md-3">';
  templateSearchResultColor += ' <div class="result-color" id="{2}" data-color-code="{0}" data-color-name="{0}">';
  templateSearchResultColor += '  <span style="background-color: {0}"></span>';
  templateSearchResultColor += '  <p class="name-color">';
  templateSearchResultColor += '  {1} - {0}';
  templateSearchResultColor += '  </p>';
  templateSearchResultColor += ' </div>';
  templateSearchResultColor += '</div>';

  $('#searchColor').keypress(function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var resultColor = [];
      _.forEach(list_color, function (value) {
        _.forEach(value.listId, function (colors) {
          _.forEach(colors.listColor, function (color) {
            console.log(color.colorName.indexOf($('#searchColor').val()));
            if(color.colorName.indexOf($('#searchColor').val()) >= 0){
              resultColor.push(color);
            }
          });
        });
      });
      var widgetTemplateSearchResultColor = '';
      for (var i = 0; i < resultColor.length; i++) {
        widgetTemplateSearchResultColor += templateSearchResultColor.format(resultColor[i].colorId, resultColor[i].colorName, resultColor[i].id);
      }

      $('.show-search-result').html('').append(widgetTemplateSearchResultColor);
    }
  });

  $('.btn-love').click(function () {
    var dataColorCode = $(this).parent().attr('data-color-code');
    var dataColorName = $(this).parent().attr('data-color-name');

    if ($(this).hasClass('isLove')) {
      $(this).removeClass('isLove');
      _.remove(colorFavorite, {colorCode: dataColorCode});
    } else {
      $(this).addClass('isLove');
      colorFavorite.push({
        colorCode: dataColorCode,
        colorName: dataColorName
      });
    }

    appendFavoriteColor(colorFavorite);
  });

})();


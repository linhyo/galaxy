(function($) {
	$.fn.slidingCarousel = function (options) {
		options = $.extend({}, $.fn.slidingCarousel.defaults, options || {});

		var pluginData = {
			container: $(this),
			sinus:   [0],
			images:  null,
			mIndex:  null
		};

		var preload = function(callback) {
			var images = pluginData.container.find('.slide img'),
				total  = images.length,
				shift  = total % 2,
				middle = total < 3 ? total : ~~(total / 2) + shift,
				result = [],
				loaded = 0;

			images.each(function (index, element) {
				var img = new Image();

				$(img).bind('load error', function () {
					loaded++;

					// push loaded images into regular array.
					// to preserve the order array gets constructed so, that elements indexed:
					//
					//    0 1 2 3 4 5 6
					//
					// are shifted within destination array by half of total length (-1 depending on parity/oddness):
					//
					//    6 5 4 0 1 2 3
					//
					// and finally reversed to get correct scrolling direction.

					result[(index+middle-shift) % total] = element;

					// need ratio for calculating new widths
					element.ratio = this.width / this.height;
					element.origH = this.height;
					element.idx   = index;

					if (loaded == total) {
						pluginData.mIndex = middle;
						pluginData.sinsum = 0;
						pluginData.images = result.reverse();

						// prepare symetric sinus table

						for (var n=1, freq=0; n<total; n++) {
							pluginData.sinus[n] = (n<=middle) ? Math.sin(freq+=(1.6/middle)) : pluginData.sinus[total-n];

							if (n < middle)
								pluginData.sinsum += pluginData.sinus[n]*options.squeeze;
						}
						callback(pluginData.images);
					}
				});
				img.src = element.src;
			});
		};

		var setupCarousel = function() {
			preload(doLayout);
			setupEvents();
		};

		var setupEvents = function() {
			pluginData.container
				.find ('.slide > div > a').click(function(e) {
					e.preventDefault();
					var idx = $(this).find('img')[0].idx,
						arr = pluginData.images;

					while (arr[pluginData.mIndex-1].idx != idx ) {
						arr.push(arr.shift());
					}
					doLayout(arr, true);
				})
				.end();

			pluginData.container.next()
				.find('.navigate-right').click(function() {
					var images = pluginData.images;

					images.splice(0,0,images.pop());
					doLayout(images, true);
				})
				.end()
				.find('.navigate-left').click(function() {
					var images = pluginData.images;

					images.push(images.shift());
					doLayout(images, true);
				});
		};

		var doLayout = function(images, animate) {
			var mid  = pluginData.mIndex,
				sin  = pluginData.sinus,
				posx = 0,
				diff = 0,
				width  = images[mid-1].origH * images[mid-1].ratio,  /* width of middle picture */
				middle = (pluginData.container.width() - width)/2,   /* center of middle picture, relative to container */
				offset = middle - pluginData.sinsum,                 /* to get the center, all sinus offset that will be added below have to be substracted */
				height = images[mid-1].origH, top, left, idx, j=1;

			// hide description before doing layout
			pluginData.container.find('span').hide().css('opacity', 0);

			$.each(images, function(i, img) {
				idx = Math.abs(i+1-mid);
				top = idx * 40;

				// calculating new width and caching it for later use
				img.cWidth = (height-(top*2)) * img.ratio;

				diff = sin[i] * options.squeeze;
				left = posx += (i < mid) ? diff : images[i-1].cWidth + diff - img.cWidth;

				var el = $(img).closest('.slide'),
					fn = function() {
						if (i === mid-1) {
							// show caption gently
							el.find('span').show().animate({opacity: 1});
						}
					};
                    
				if (animate) {
					el.animate({
						height   : height - (top*2),
						zIndex   : mid-idx,
						top      : top,
						left     : left+offset,
						opacity  : 1
					}, options.animate, fn);
				}
				else
				{
					el.css({
						zIndex   : mid-idx,
						height   : height - (top*2),
						top      : top,
						left     : left+offset,
						opacity  : 0
					}).show().animate({opacity: 1 }, fn);

					if (options.shadow) {
						el.addClass('shadow');						
					}
				}
			});

			//if (!animate) {
			//	pluginData.container
			//		.find('.navigate-left').css('left', middle+50)
			//		.end()
			//		.find('.navigate-right').css('left', middle+width-75);
			//}
		};

		this.initialize = function () {
			setupCarousel();
		};

		// Initialize the plugin
		return this.initialize();

	};

	$.fn.slidingCarousel.defaults = {
		shadow: true,
		squeeze: 124,
		animate: 250
	};

})(jQuery);

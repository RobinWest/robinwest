
(function(){
	var app = angular.module('main', []);

	app.controller('MainController', function(){
		this.loadBackground = function(){
			// Lazy load in the higher res image
			var bgImg = $('<img />').attr('src', 'asset/img/background.jpg').on('load', function(e){
				$('#main-image')
					.css('background-image', 'url(\'asset/img/background.jpg\')')
					.addClass('active');
			});
		}
		this.smoothScroll = function(e){
			var $el 	= $(e.currentTarget),
				amount 	= $('#work').offset().top;

			$el.addClass('active');

			$('html,body').animate({
				scrollTop: amount
			}, 300, function(){
				$el.removeClass('active');
			});
		}
	});

	app.controller('TabController', function(){
		this.workTab = 1;

		this.setTab = function(tab){
			// bail if it's out of range
			if(tab > 4 || tab < 1)
				return;

			this.workTab = tab;
		}
		this.isSet = function(tab){
			return this.workTab === tab;
		}
	});

})();
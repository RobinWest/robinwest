
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

	app.controller('ContentController', function(){
		this.descriptions = [
			{
				id: 1,
				name: 'About me',
				tag: 'Bio',
				imgSrc: 'asset/img/me.jpg',
				templateSrc: 'asset/html/aboutme.html'
			},{
				id: 2,
				name: 'Sign-Up.to',
				tag: 'Previous work',
				imgSrc: 'asset/img/sut-logo.jpg',
				templateSrc: 'asset/html/sut.html'
			},{
				id: 3,
				name: 'dev.sign-up.to',
				tag: 'Previous Work',
				imgSrc: 'asset/img/sut-dev.jpg',
				templateSrc: 'asset/html/dev.html'
			},{
				id: 4,
				name: 'Knit me a cake',
				tag: 'Personal',
				imgSrc: 'asset/img/knitmeacake.jpg',
				templateSrc: 'asset/html/knitmeacake.html'
			}
		];

		this.descLength = this.descriptions.length;
		this.workTab = 1;

		this.setTab = function(tab){
			// bail if it's out of range
			if(tab > this.descLength || tab < 1)
				return;

			this.workTab = tab;
		}
		this.isSet = function(tab){
			return this.workTab === tab;
		}
	});

	app.directive('content', ['$http', function($http){
		var linker = function(scope, el, attrs){

			$http.get(scope.source)
				.success(function(data){
					el.html(data);
				})
				.error(function(data, status){
					console.log('Something went bad --');
					console.log(data);
					console.log(status);
					// Hack for now
					el.html('<p>Uh oh! Something went wrong. Sorry about that...</p>')
				});
		}

		return {
			restrict: 'E',
			scope: {
				source:'='
			},
			link: linker
		};
	}]);

})();
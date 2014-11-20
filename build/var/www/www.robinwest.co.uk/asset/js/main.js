
(function(){
	var app = angular.module('main', []);

	app.controller('MainController', function(){

	});
	app.controller('TabController', function(){
		this.workTab = 1;

		this.setTab = function(tab){
			if(tab > 5 || tab < 1)
				return;

			this.workTab = tab;
		}
		this.isSet = function(tab){
			return this.workTab === tab;
		}
	});

})();

$(document).ready(function(){
	// Lazy load in the higher res image
	var bgImg = $('<img />').attr('src', 'asset/img/background.jpg').on('load', function(e){
		$('#main-image')
			.css('background-image', 'url(\'asset/img/background.jpg\')')
			.addClass('active');
	});

	// TODO Move to angular
	$('#toWork').on('click', function(e){
		var $el 	= $(e.currentTarget),
			amount 	= $('#work').offset().top;

		$el.addClass('active');

		$('html,body').animate({
			scrollTop: amount
		}, 300, function(){
			$el.removeClass('active');
		});

	});
});
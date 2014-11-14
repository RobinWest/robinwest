$(document).ready(function(){
	// Lazy load in the higher res image
	var animation,
		bgImg = $('<img />').attr('src', 'asset/img/background.jpg').on('load', function(e){
		$('.home').css('background-image', 'url(\'asset/img/background.jpg\')');
	});

	// Bind animation events
	$('#comingSoonContainer').on('mouseenter', function(e){
		var $svg = $(e.currentTarget).find('svg');


		$svg
			.css('stroke-width', '2px')
			.css('stroke-dasharray', 20);

		animation = setInterval(function(){
			animateStroke($svg);
		}, 100);

	})
	.on('mouseleave', function(e){
		var $svg = $(e.currentTarget).find('svg');

		clearInterval(animation);

		$svg
			.css('stroke-width', 0)
			.css('stroke-dasharray', 0);
	});


	$('.navitem').on('click', function(e){
		var $target = $(e.currentTarget);

		$('.navitem.selected').removeClass('selected');

		$target.addClass('selected');
	})
});

function animateStroke($el){
	var dash = parseInt(Math.random() * (240 - 100) + 1).toFixed();

	$el.css('stroke-dasharray', dash);
}
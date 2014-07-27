$(document).ready(function(){
	// Lazy load in the higher res image
	var bgImg = $('<img />').attr('src', 'asset/img/background.jpg').on('load', function(e){
		$('body').css('background-image', 'url(\'asset/img/background.jpg\')');
	});
});
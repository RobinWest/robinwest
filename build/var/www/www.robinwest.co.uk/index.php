<?php
	$logo 		= 'asset/img/logo-simple-opt.svg';
	$comingSoon = 'asset/img/comingsoon.svg';
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<meta charset="UTF-8">
	<title>Robin West</title>
	<link rel="stylesheet" href="asset/css/pure.css">
	<link rel="stylesheet" href="asset/css/style.css">
</head>
<body>
	<? /*<div class="responsiveHelper">
		<div class="responsiveHelper-sm">Small</div>
		<div class="responsiveHelper-md">Medium</div>
		<div class="responsiveHelper-lg">Large</div>
		<div class="responsiveHelper-xl">X Large</div>
	</div>*/?>
	<div id="logoContainer">
		<? include($logo); ?>
	</div>
	<div class="pure-g">
		<div class="pure-u-1">
			<div id="comingSoonContainer">
				<? include($comingSoon); ?>
			</div>
		</div>
	</div>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="asset/js/main.js"></script>
</body>
</html>
<?php
	$logo = 'asset/img/logo-simple-opt.svg';
	$comingSoon = 'asset/img/comingsoon-opt.svg';
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Robin West</title>
	<link rel="stylesheet" href="asset/css/pure.css">
	<link rel="stylesheet" href="asset/css/style.css">
</head>
<body>
	<div class="pure-g">
		<div id="logoContainer">
			<? include($logo); ?>
		</div>
		<div id="comingSoonContainer">
			<? include($comingSoon); ?>
		</div>
	</div>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="asset/js/main.js"></script>
</body>
</html>
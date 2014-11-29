<!DOCTYPE html>
<html lang="en" ng-app="main">
<head>
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<meta charset="UTF-8">
	<title>Robin West</title>
	<!-- Too many favicons? -->
	<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
	<link rel="icon" type="image/png" href="/favicon-192x192.png" sizes="192x192">
	<link rel="icon" type="image/png" href="/favicon-160x160.png" sizes="160x160">
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
	<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
	<meta name="msapplication-TileColor" content="#5FAC53">
	<meta name="msapplication-TileImage" content="/mstile-144x144.png">

	<link rel="stylesheet" href="asset/css/pure.css">
	<link rel="stylesheet" href="asset/css/style.css">
	<!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> -->
	<script src="asset/js/angular.min.js"></script>
	<script src="asset/js/jquery.min.js"></script>
	<script src="asset/js/main.js"></script>
</head>
<body ng-controller="MainController as main">
	<section id="home">
		<div id="main-image" ng-init="main.loadBackground()">
			<div class="logo-container">
				<svg viewBox="0 0 300 300">
					<use xlink:href="asset/img/svg/logo.svg#logo"></use>
				</svg>
			</div>
			<div id="toWork" ng-click="main.smoothScroll($event)">
				<svg viewBox="0 0 300 300">
					<use xlink:href="asset/img/svg/icons.svg#next-section"></use>
				</svg>
			</div>
		</div>
	</section>
	<section ng-controller="ContentController as content" id="work">
		<div class="nav-container">
			<div class="pure-g">
				<div ng-click="content.setTab(content.workTab - 1)" class="pure-u-1-4 xl-hide">
					<div ng-class="{ inactive:content.isSet(1)}" class="nav-control">
						<svg viewBox="0 0 300 300">
							<use xlink:href="asset/img/svg/icons.svg#previous"></use>
						</svg>
					</div>
				</div>
				
				<div ng-repeat="item in content.descriptions" ng-click="content.setTab(item.id)" ng-class="{ selected:content.isSet(item.id)}" class="pure-u-1-2 pure-u-xl-1-{{content.descLength}} nav-item">
					<p><span>{{item.tag}}</span></p>
					<h3>{{item.name}}</h3>
				</div>

				<div ng-click="content.setTab(content.workTab + 1)" class="pure-u-1-4 xl-hide">
					<div ng-class="{ inactive:content.isSet(4)}" class="nav-control">
						<svg viewBox="0 0 300 300">
							<use xlink:href="asset/img/svg/icons.svg#next"></use>
						</svg>
					</div>
				</div>
			</div>
		</div>
		<div class="content-container">
			<div class="pure-g">
				<div class="pure-u-1 pure-u-xl-1-2 gallery-container">
					<img ng-repeat="item in content.descriptions" ng-show="content.isSet(item.id)" ng-src="{{item.imgSrc}}">
				</div>
				<div class="pure-u-1 pure-u-xl-1-2 information-container">

					<article class="description-container">
						<div ng-repeat="item in content.descriptions" ng-show="content.isSet(item.id)" class="description">
							<content source="item.templateSrc"></content>
						</div>
					</article>

					<article class="contact-container">
						<div class="pure-g">
							<div class="pure-u-1">
								<h2>Contact me</h2>
							</div>
							<div class="pure-u-1 pure-u-lg-1-3">
								<a href="mailto:robermak@gmail.com" target="_blank">
									<svg viewBox="0 0 300 300">
										<use xlink:href="asset/img/svg/icons.svg#mail"></use>
									</svg>
								</a>
								<a href="mailto:robermak@gmail.com" target="_blank">robermak@gmail.com</a>
							</div>
							<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
								<a href="https://twitter.com/SirRobinWest" target="_blank">
									<svg viewBox="0 0 300 300">
										<use xlink:href="asset/img/svg/icons.svg#twitter"></use>
									</svg>
								</a>
								<a href="https://twitter.com/SirRobinWest" target="_blank">@SirRobinWest</a>
							</div>
							<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
								<a href="https://github.com/RobinWest" target="_blank">
									<svg viewBox="0 0 300 300">
										<use xlink:href="asset/img/svg/icons.svg#github"></use>
									</svg>
								</a>
								<a href="https://github.com/RobinWest" target="_blank">RobinWest</a>
							</div>
						</div>
					</article>
					<div class="corner"></div>
				</div>
			</div>
		</div>
	</section>
</body>
</html>

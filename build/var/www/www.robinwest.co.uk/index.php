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
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="asset/js/svg4everybody.ie8.min.js"></script>
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
	<section ng-controller="TabController as tab" id="work">
		<div class="nav-container">
			<div class="pure-g">
				<div ng-click="tab.setTab(tab.workTab - 1)" class="pure-u-1-4 xl-hide">
					<div ng-class="{ inactive:tab.isSet(1)}" class="nav-control">
						<svg viewBox="0 0 300 300">
							<use xlink:href="asset/img/svg/icons.svg#previous"></use>
						</svg>
					</div>
				</div>
			
				<div ng-click="tab.setTab(1)" ng-class="{ selected:tab.isSet(1)}" class="pure-u-1-2 pure-u-xl-1-5 nav-item">
					<p><span>Bio</span></p>
					<h3>About me</h3>
				</div>
				<div ng-click="tab.setTab(2)" ng-class="{ selected:tab.isSet(2)}" class="pure-u-1-2 pure-u-xl-1-5 nav-item">
					<p><span>Previous work</span></p>
					<h3>Sign-Up.to</h3>
				</div>
				<div ng-click="tab.setTab(3)" ng-class="{ selected:tab.isSet(3)}" class="pure-u-1-2 pure-u-xl-1-5 nav-item">
					<p><span>Previous work</span></p>
					<h3>dev.sign-up.to</h3>
				</div>
				<div ng-click="tab.setTab(4)" ng-class="{ selected:tab.isSet(4)}" class="pure-u-1-2 pure-u-xl-1-5 nav-item">
					<p><span>Personal</span></p>
					<h3>Knit me a cake</h3>
				</div>
				<div ng-click="tab.setTab(5)" ng-class="{ selected:tab.isSet(5)}" class="pure-u-1-2 pure-u-xl-1-5 nav-item">
					<p><span>Personal</span></p>
					<h3>Photographs</h3>
				</div>
			
				<div ng-click="tab.setTab(tab.workTab + 1)" class="pure-u-1-4 xl-hide">
					<div ng-class="{ inactive:tab.isSet(5)}" class="nav-control">
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
					<img ng-show="tab.isSet(1)" ng-src="asset/img/me.jpg">
					<img ng-show="tab.isSet(2)" ng-src="asset/img/sut-logo.jpg">
					<img ng-show="tab.isSet(3)" ng-src="asset/img/sut-dev.jpg">
					<img ng-show="tab.isSet(4)" ng-src="asset/img/audiences.jpg">
					<img ng-show="tab.isSet(5)" ng-src="asset/img/sms-manager.jpg">
				</div>
				<div class="pure-u-1 pure-u-xl-1-2 information-container">
					<article class="description-container">
						<div ng-show="tab.isSet(1)" class="description">
							<h1>Hi, I'm Robin&hellip;</h1>
							<p>I'm a front end web developer specialising in UI and UX design based in Surrey, UK.</p>
							<p>I'm an avid fan of most things creative; music, typography, photography, programming, illustration, design. I love trying out new techniques and throwing myself at things I don't know yet.</p>
							<p>If I'm not doing one of the above I'm probably socialising, playing video games or watching old-school horror movies - usually with a beer in hand!</p>
						</div>
						
						<div ng-show="tab.isSet(2)" class="description">
							<h1>Sign-Up.to</h1>
							<p>I am currently working as User Experience Lead at Sign-Up.to. Since joining the Interaction team I have worked to improve the user experience of the Sign-Up.to platform and the processes used to develop our applications.</p>
							<ul>
								<li>Implemented a combination of design studio sessions, early paper prototyping, and iterative, usability-lead development for new applications.</li>
								<li>Implemented analytics tools across specific areas of the platform to gain insight and smooth out common choke-points for new and existing users.</li>
								<li>Using web technologies such as Backbone.js, Node.js, jQuery, HTML5, CSS3  to create snappy, easy to use applications with complex functionality.</li>
								<li>Integration with Sign-Up.to's own RESTful <a href="http://dev.sign-up.to" target="_blank">PMAPI</a>.</li>
							</ul>
						</div>

						<div ng-show="tab.isSet(3)" class="description">
							<h1>dev.sign-up.to</h1>
							<p>The documentation site for the <a href="http://dev.sign-up.to" target="_blank">Permission Marketing API</a> - Sign-Up.to's bespoke integration API.</p>
							<ul>
								<li>Design of various elements and sections of the site including the logo, <a href="https://dev.sign-up.to/documentation/reference/latest/guides/glossary/" target="_blank">glossary</a> and <a href="https://dev.sign-up.to/careers/" target="_blank">careers</a> section.</li>
								<li>Working with the team to create a custom framework to support versioning, release logs and serve pages.</li>
								<li>Continued maintainence and improvement of design and features.</li>
								<li>Updating and writing documentation for existing and new endpoints.</li>
							</ul>
						</div>

						<div ng-show="tab.isSet(4)" class="description">
							<h1>Knit me a cake</h1>
							<p>My friend <a href="https://twitter.com/LeanneBeale" target="_blank">@LeanneBeale</a> wanted a new logo and colour scheme created for her craft blog. We were both pleased with how the design turned out, but recently a tough decision was made to close the blog and make a <a href="http://thislittlespaceofmine.co.uk/" target="_blank">fresh start</a> after a short break.</p>
							<p>I created the logo by using a chalk board and pens, then used Adobe Illustrator to vectorise and arrange the different elements.</p>
						</div>

						<div ng-show="tab.isSet(5)" class="description">
							<h1>Photographs</h1>
							<p>These days I use a simple Olympus Trip 35mm camera for most occasions. I find it stops me trying to perfect shots, locking my face in a viewfinder only to miss the experience.</p>
						</div>
					</article>
					<article class="contact-container">
						<div class="pure-g">
							<div class="pure-u-1">
								<h1>Contact me</h1>
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

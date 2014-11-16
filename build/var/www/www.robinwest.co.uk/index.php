<!DOCTYPE html>
<html lang="en" ng-app="main">
<head>
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<meta charset="UTF-8">
	<title>Robin West</title>
	<link rel="stylesheet" href="asset/css/pure.css">
	<link rel="stylesheet" href="asset/css/style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="asset/js/main.js"></script>
</head>
<body ng-controller="MainController as main">
	<section class="home">
		<div class="logo-container">
			<svg viewBox="0 0 300 300">
				<use xlink:href="asset/img/logo_trimmed.svg#logo"></use>
			</svg>
		</div>
		<div id="toWork">
			<svg viewBox="0 0 300 300">
				<use xlink:href="asset/img/next_section.svg#next-section"></use>
			</svg>
		</div>
	</section>
	<section ng-controller="TabController as tab" id="work">
		<div class="nav-container">
			<div class="pure-g">
				<div ng-click="tab.setTab(tab.workTab - 1)" class="pure-u-1-4 nav-control">
					<h2>&lt;</h2>
				</div>
			
				<div ng-click="tab.setTab(1)" ng-class="{ selected:tab.isSet(1)}" class="pure-u-1-2 pure-u-lg-1-5 nav-item">
					<p>Bio</p>
					<h3>About me</h3>
				</div>
				<div ng-click="tab.setTab(2)" ng-class="{ selected:tab.isSet(2)}" class="pure-u-1-2 pure-u-lg-1-5 nav-item">
					<p>Previous work</p>
					<h3>Sign-Up.to</h3>
				</div>
				<div ng-click="tab.setTab(3)" ng-class="{ selected:tab.isSet(3)}" class="pure-u-1-2 pure-u-lg-1-5 nav-item">
					<p>Previous work</p>
					<h3>Audiences</h3>
				</div>
				<div ng-click="tab.setTab(4)" ng-class="{ selected:tab.isSet(4)}" class="pure-u-1-2 pure-u-lg-1-5 nav-item">
					<p>Previous work</p>
					<h3>SMS Manager</h3>
				</div>
				<div ng-click="tab.setTab(5)" ng-class="{ selected:tab.isSet(5)}" class="pure-u-1-2 pure-u-lg-1-5 nav-item">
					<p>Previous work</p>
					<h3>labs.sign-up.to</h3>
				</div>
			
				<div ng-click="tab.setTab(tab.workTab + 1)" class="pure-u-1-4 nav-control">
					<h2>&gt;</h2>
				</div>
			</div>
		</div>
		<div class="content-container">
			<div class="pure-g">
				<div class="pure-u-1 pure-u-lg-1-2 gallery-container">
					<img ng-show="tab.isSet(1)" src="asset/img/me.jpg">
					<img ng-show="tab.isSet(2)" src="asset/img/sut-logo.jpg">
					<img ng-show="tab.isSet(3)" src="asset/img/sms-manager.jpg">
					<img ng-show="tab.isSet(4)" src="asset/img/sms-manager.jpg">
					<img ng-show="tab.isSet(5)" src="asset/img/sut-labs.jpg">
				</div>
				<div class="pure-u-1 pure-u-lg-1-2 description-container">
					<article>
						<div ng-show="tab.isSet(1)" class="description">
							<h2>Hi, I'm Robin&hellip;</h2>
							<p>I'm a front end web developer specialising in UI and UX design.</p>
						</div>
						
						<div ng-show="tab.isSet(2)" class="description">
							<h2>Sign-Up.to</h2>
							<p>I am currently working at Sign-Up.to - a leading self-service permission marketing platform. Since joining the Interaction team I have worked to improve the user experience of the Sign-Up.to platform and the processes used to develop our user interfaces.</p>
							<ul>
								<li>Implemented a combination of design studio sessions, early paper prototyping, and iterative, usability-lead development for new applications.</li>
								<li>Implemented Mixpanel analytics across specific areas of the platform to gain insight and improve upon common choke-points for new and existing users.</li>
								<li>Continued maintanance and improvement of legacy areas of the platform.</li>
							</ul>
						</div>
						
						<div ng-show="tab.isSet(3)" class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique recusandae asperiores aliquid, laboriosam architecto. Animi delectus eligendi ipsam totam pariatur, beatae, doloribus dolorem natus quo et reiciendis itaque autem quia!</div>
						
						<div ng-show="tab.isSet(4)" class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique recusandae asperiores aliquid, laboriosam architecto. Animi delectus eligendi ipsam totam pariatur, beatae, doloribus dolorem natus quo et reiciendis itaque autem quia!</div>
						
						<div ng-show="tab.isSet(5)" class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique recusandae asperiores aliquid, laboriosam architecto. Animi delectus eligendi ipsam totam pariatur, beatae, doloribus dolorem natus quo et reiciendis itaque autem quia!</div>
					</article>
					<article class="contact-container">
						<div class="pure-g">
							<div class="pure-u-1">
								<h1>Contact me</h1>
							</div>
							<div class="pure-u-1-3">
								<svg viewBox="0 0 300 300">
									<use xlink:href="asset/img/mail.svg#mail"></use>
								</svg>
							</div>
							<div class="pure-u-1-3">
								<svg viewBox="0 0 300 300">
									<use xlink:href="asset/img/twitter.svg#twitter"></use>
								</svg>
							</div>
							<div class="pure-u-1-3">
								<svg viewBox="0 0 300 300">
									<use xlink:href="asset/img/github.svg#github"></use>
								</svg>
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
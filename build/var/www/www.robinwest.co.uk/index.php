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
					<h3>Audiences</h3>
				</div>
				<div ng-click="tab.setTab(4)" ng-class="{ selected:tab.isSet(4)}" class="pure-u-1-2 pure-u-xl-1-5 nav-item">
					<p><span>Previous work</span></p>
					<h3>SMS manager</h3>
				</div>
				<div ng-click="tab.setTab(5)" ng-class="{ selected:tab.isSet(5)}" class="pure-u-1-2 pure-u-xl-1-5 nav-item">
					<p><span>Previous work</span></p>
					<h3>dev.sign-up.to</h3>
				</div>
			
				<div ng-click="tab.setTab(tab.workTab + 1)" class="pure-u-1-4 nav-control">
					<h2>&gt;</h2>
				</div>
			</div>
		</div>
		<div class="content-container">
			<div class="pure-g">
				<div class="pure-u-1 pure-u-xl-1-2 gallery-container">
					<img ng-show="tab.isSet(1)" src="asset/img/me.jpg">
					<img ng-show="tab.isSet(2)" src="asset/img/sut-logo.jpg">
					<img ng-show="tab.isSet(3)" src="asset/img/audiences.jpg">
					<img ng-show="tab.isSet(4)" src="asset/img/sms-manager.jpg">
					<img ng-show="tab.isSet(5)" src="asset/img/sut-labs.jpg">
				</div>
				<div class="pure-u-1 pure-u-xl-1-2 information-container">
					<article class="description-container">
						<div ng-show="tab.isSet(1)" class="description">
							<h1>Hi, I'm Robin&hellip;</h1>
							<p>I'm a front end web developer specialising in UI and UX design. I am currently working as Lead User Interaction Designer in the (small) Interaction team at Sign-Up.to.</p>
							<p>I have worked in web development for around 4 years, gaining experience in modern front end technologies such as Backbone.js, jQuery, Node.js, Angular.js, HTML5, CSS3. I am also familiar with Git, Linux, Apache, PHP and MySQL, among others.</p>
							<p>When I'm not working I'll likely be playing video games, drawing, playing some music or watching horror movies... Often with a beer in hand.</p>
						</div>
						
						<div ng-show="tab.isSet(2)" class="description">
							<h1>Sign-Up.to</h1>
							<p>Sign-Up.to - a leading self-service permission marketing platform. Since joining the Interaction team I have worked to improve the user experience of the Sign-Up.to platform and the processes used to develop our user interfaces.</p>
							<ul>
								<li>Implementing a combination of design studio sessions, early paper prototyping, and iterative, usability-lead development for new applications.</li>
								<li>Implementing analytics tools across specific areas of the platform to gain insight and smooth out common choke-points for new and existing users.</li>
								<li>Using web technologies such as Backbone.js, Node.js, jQuery, HTML5, CSS3  to create quick, easy to use applications for complex functionality.</li>
								<li>Continued maintanance and improvement of legacy areas of the platform.</li>
							</ul>
						</div>
						
						<div ng-show="tab.isSet(3)" class="description">
							<h1>Audiences !!Replace image</h1>
							<p>The audience segmentation tools allow our users to create complex cross-sections of their subscribers based on data they have collected.</p>
							<ul>
								<li>Early design studio sessions to collect stakeholder product requirements.</li>
								<li>Wireframing and paper prototyping.</li>
								<li>Early prototyping and continued usabilty testing to prove design concepts and steer development.</li>
								<li>Use of custom widget architecture utilising Backbone.js, Underscore.js and jQuery.</li>
								<li>Integration with Sign-Up.to's own <a href="http://dev.sign-up.to" target="_blank">PMAPI</a>.</li>
								<li>Implementation of Google Maps API's.</li>
							</ul>
						</div>
						
						<div ng-show="tab.isSet(4)" class="description">
							<h1>SMS manager !!replace image</h1>
							<p>Sign-Up.to offers the abilty to recieve SMS messages via a UK shortcode. The SMS manager adds the ability to respond, react and process these messages.</p>
							<ul>
								<li>First implementation of custom widget architecture utilising Backbone.js, Underscore.js and jQuery.</li>
								<li>Early design studio sessions to collect stakeholder product requirements.</li>
								<li>Early wireframe based usability testing.</li>
								<li>Integration with Sign-Up.to's own <a href="http://dev.sign-up.to" target="_blank">PMAPI</a>.</li>
							</ul>
						</div>
						
						<div ng-show="tab.isSet(5)" class="description">
							<h1>dev.sign-up.to !go there icon and replace image</h1>
							<p>The documentation site for the PMAPI (Permission Marketing API) - Sign-Up.to's bespoke integration API.</p>
							<ul>
								<li>Design of various elements and sections of the site including the logo, <a href="https://dev.sign-up.to/documentation/reference/latest/guides/glossary/" target="_blank">glossary</a> and <a href="https://dev.sign-up.to/careers/" target="_blank">careers</a> section.</li>
								<li>Working with the team to create a custom framework to support versioning, release logs and serve pages.</li>
								<li>Continued maintainence and improvement of design and features.</li>
								<li>Updating and writing documentation for existing and new endpoints.</li>
							</ul>
						</div>
					</article>
					<article class="contact-container">
						<div class="pure-g">
							<div class="pure-u-1">
								<h1>Contact me</h1>
							</div>
							<div class="pure-u-1-3">
								<a href="mailto:robermak@gmail.com" target="_blank">
									<svg viewBox="0 0 300 300">
										<use xlink:href="asset/img/icons.svg#mail"></use>
									</svg>
								</a>
								<a href="mailto:robermak@gmail.com" target="_blank">robermak@gmail.com</a>
							</div>
							<div class="pure-u-1-3">
								<a href="https://twitter.com/SirRobinWest" target="_blank">
									<svg viewBox="0 0 300 300">
										<use xlink:href="asset/img/icons.svg#twitter"></use>
									</svg>
								</a>
								<a href="https://twitter.com/SirRobinWest" target="_blank">@SirRobinWest</a>
							</div>
							<div class="pure-u-1-3">
								<a href="https://github.com/RobinWest" target="_blank">
									<svg viewBox="0 0 300 300">
										<use xlink:href="asset/img/icons.svg#github"></use>
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
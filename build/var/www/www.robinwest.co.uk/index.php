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
		<div id="workSection">
			<svg viewBox="0 0 300 300">
				<use xlink:href="asset/img/next_section.svg#next-section"></use>
			</svg>
		</div>
	</section>
	<section ng-controller="TabController as tab" class="work">
		<div class="nav-container">
			<div class="mobile-nav">
				<div class="pure-g">
					<div ng-click="tab.setTab(tab.workTab - 1)" class="pure-u-1-4">
						<h1>&lt;</h1>
					</div>
				
					<div ng-class="{ selected:tab.isSet(1)}" class="pure-u-1-2 navitem">
						<p>Bio</p>
						<h3>About me</h3>
					</div>
					<div ng-class="{ selected:tab.isSet(2)}" class="pure-u-1-2 navitem">
						<p>Previous work</p>
						<h3>Sign-Up.to</h3>
					</div>
					<div ng-class="{ selected:tab.isSet(3)}" class="pure-u-1-2 navitem">
						<p>Previous work</p>
						<h3>Audiences</h3>
					</div>
					<div ng-class="{ selected:tab.isSet(4)}" class="pure-u-1-2 navitem">
						<p>Previous work</p>
						<h3>SMS Manager</h3>
					</div>
					<div ng-class="{ selected:tab.isSet(5)}" class="pure-u-1-2 navitem">
						<p>Previous work</p>
						<h3>labs.sign-up.to</h3>
					</div>
				
					<div ng-click="tab.setTab(tab.workTab + 1)" class="pure-u-1-4">
						<h1>&gt;</h1>
					</div>
				</div>
			</div>

			<div class="desktop-nav">
				<div class="pure-g">
					<div ng-click="tab.setTab(1)" ng-class="{ selected:tab.isSet(1)}" class="pure-u-1-5 navitem">
						<p>Bio</p>
						<h3>About me</h3>
					</div>
					<div ng-click="tab.setTab(2)" ng-class="{ selected:tab.isSet(2)}" class="pure-u-1-5 navitem">
						<p>Previous work</p>
						<h3>Sign-Up.to</h3>
					</div>
					<div ng-click="tab.setTab(3)" ng-class="{ selected:tab.isSet(3)}" class="pure-u-1-5 navitem">
						<p>Previous work</p>
						<h3>Audiences</h3>
					</div>
					<div ng-click="tab.setTab(4)" ng-class="{ selected:tab.isSet(4)}" class="pure-u-1-5 navitem">
						<p>Previous work</p>
						<h3>SMS Manager</h3>
					</div>
					<div ng-click="tab.setTab(5)" ng-class="{ selected:tab.isSet(5)}" class="pure-u-1-5 navitem">
						<p>Previous work</p>
						<h3>labs.sign-up.to</h3>
					</div>
				</div>
			</div>
		</div>
		<div class="content-container">
			<div class="pure-g">
				<div class="pure-u-1 pure-u-lg-1-2 gallery-container">
					<img ng-show="tab.isSet(1)" src="asset/img/me.jpg">
					<img ng-show="tab.isSet(2)" src="asset/img/me.jpg">
					<img ng-show="tab.isSet(3)" src="asset/img/me.jpg">
					<img ng-show="tab.isSet(4)" src="asset/img/me.jpg">
					<img ng-show="tab.isSet(5)" src="asset/img/me.jpg">
				</div>
				<div class="pure-u-1 pure-u-lg-1-2 description-container">
					<div ng-show="tab.isSet(1)" class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique recusandae asperiores aliquid, laboriosam architecto. Animi delectus eligendi ipsam totam pariatur, beatae, doloribus dolorem natus quo et reiciendis itaque autem quia!</div>

					<div ng-show="tab.isSet(2)" class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique recusandae asperiores aliquid, laboriosam architecto. Animi delectus eligendi ipsam totam pariatur, beatae, doloribus dolorem natus quo et reiciendis itaque autem quia!</div>

					<div ng-show="tab.isSet(3)" class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique recusandae asperiores aliquid, laboriosam architecto. Animi delectus eligendi ipsam totam pariatur, beatae, doloribus dolorem natus quo et reiciendis itaque autem quia!</div>

					<div ng-show="tab.isSet(4)" class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique recusandae asperiores aliquid, laboriosam architecto. Animi delectus eligendi ipsam totam pariatur, beatae, doloribus dolorem natus quo et reiciendis itaque autem quia!</div>

					<div ng-show="tab.isSet(5)" class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique recusandae asperiores aliquid, laboriosam architecto. Animi delectus eligendi ipsam totam pariatur, beatae, doloribus dolorem natus quo et reiciendis itaque autem quia!</div>
					<div class="corner"></div>
				</div>
			</div>
		</div>
	</section>
</body>
</html>
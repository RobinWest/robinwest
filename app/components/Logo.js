var React = require('react');

require('../css/components/logo.less');

var LogoSVG = require('./LogoSVG');

const Logo = (props) => {
	return (
		<div className="logo-container">
			<LogoSVG />
		</div>
	);
}

module.exports = Logo;
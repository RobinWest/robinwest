var React = require('react');

require('../css/components/logo.less');

var LogoSVG = require('./LogoSVG');

class Logo extends React.Component {
	render(){
		return (
			<div className="logo-container">
				<LogoSVG />
			</div>
		);
	};
}

module.exports = Logo;
var React = require('react');

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
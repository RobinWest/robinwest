var React = require('react');

class Logo extends React.Component {
	render(){
		return (
			<div className="logo-container">
				<img src="//s3.amazonaws.com/uifaces/faces/twitter/idiot/128.jpg" />
			</div>
		);
	}
}

module.exports = Logo;
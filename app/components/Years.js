var React = require('react');

class Years extends React.Component {
	constructor(){
		super();
		this.year = new Date().toString();
	};

	render(){
		return (
			<span>{this.year}</span>
		);
	};
}

module.exports = Years;

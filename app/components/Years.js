var React = require('react');

class Years extends React.Component {
	constructor(){
		super();

		// I've made this component because I don't want to have to keep updating this copy...
		var start = new Date('2011', '01').getFullYear(),
			now   = new Date().getFullYear();

		this.years = now - start;
	};

	render(){
		return (
			<span>{this.years} years</span>
		);
	};
}

module.exports = Years;

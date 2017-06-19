var React = require('react');

const Years = (props) => {
	let years = new Date().getFullYear() - new Date('2011', '0').getFullYear();

	return (
		<span>{years} years</span>
	);
}

module.exports = Years;

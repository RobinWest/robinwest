var React     = require('react');
var PropTypes = require('prop-types');

class MenuDownIcon extends React.Component {
	static defaultProps = {
		width: 44,
		height: 32,
		viewBox: '0 0 44 32',
		className: ''
	};

	static propTypes = {
		width: PropTypes.number,
		height: PropTypes.number,
		viewBox: PropTypes.string,
		className: PropTypes.string
	};

	render(){
		return (
			<svg className={'icon icon-menu-down ' + this.props.className} xmlns="http://www.w3.org/2000/svg" /*width={this.props.width} height={this.props.height}*/ viewBox={this.props.viewBox} aria-labelledby="title">
				<title id="title">Menu Down Icon</title>
				<path d="M0 6h28v6h-28v-6zM0 14h28v6h-28v-6zM0 22h28v6h-28v-6z"></path>
				<path d="M31 14l6 6 6-6z"></path>
			</svg>
		);
	};
}

module.exports = MenuDownIcon;
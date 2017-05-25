var React     = require('react');
var PropTypes = require('prop-types');

class TerminalIcon extends React.Component {
	static defaultProps = {
		width: 32,
		height: 32,
		viewBox: '0 0 32 32',
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
			<svg className={'icon icon-terminal ' + this.props.className} xmlns="http://www.w3.org/2000/svg" /*width={this.props.width} height={this.props.height}*/ viewBox={this.props.viewBox} aria-labelledby="title">
				<title id="title">Terminal Icon</title>
				<path d="M0 2v28h32v-28h-32zM30 28h-28v-24h28v24zM28 6h-24v20h24v-20zM14 16h-2v2h-2v2h-2v-2h2v-2h2v-2h-2v-2h-2v-2h2v2h2v2h2v2zM22 20h-6v-2h6v2z"></path>
			</svg>
		);
	};
}

module.exports = TerminalIcon;
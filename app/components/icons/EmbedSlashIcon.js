var React     = require('react');
var PropTypes = require('prop-types');

class EmbedSlashIcon extends React.Component {
	static defaultProps = {
		width: 40,
		height: 32,
		viewBox: '0 0 40 32',
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
			<svg className={'icon icon-embed-slash ' + this.props.className} xmlns="http://www.w3.org/2000/svg" /*width={this.props.width} height={this.props.height}*/ viewBox={this.props.viewBox} aria-labelledby="title">
				<title id="title">Embed Slash Icon</title>
				<path d="M26 23l3 3 10-10-10-10-3 3 7 7z"></path>
				<path d="M14 9l-3-3-10 10 10 10 3-3-7-7z"></path>
				<path d="M21.916 4.704l2.171 0.592-6 22.001-2.171-0.592 6-22.001z"></path>
			</svg>
		);
	};
}

module.exports = EmbedSlashIcon;
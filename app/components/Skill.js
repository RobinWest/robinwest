var React   = require('react');
var Scroll  = require('react-scroll');

require('../css/components/skill.less');

var CrossIcon     = require('./icons/CrossIcon');

var animateScroll = Scroll.animateScroll;
var scrollSpy     = Scroll.scrollSpy;

class Contact extends React.Component {
	constructor(props){
		super(props);

		this.toggleState = this.toggleState.bind(this);
		this.activateSkill = this.activateSkill.bind(this);
		this.deactivateSkill = this.deactivateSkill.bind(this);

		// console.log(scrollSpy);

		this.state = {
			active: false
		};
	};

	toggleState(e){
		this.setState({
			active: !this.state.active
		});
	};

	activateSkill(e){
		var currentTarget = e.currentTarget;
		var bodyContainer = document.getElementById('body');

		animateScroll.scrollToBottom({containerId: 'body', duration: 300});

		setTimeout(function(){
			animateScroll.scrollToBottom({duration: 300});
		}, 300);
			
		this.setState({
			active: true
		});
	};
	deactivateSkill(e){
		e.stopPropagation();

		this.setState({
			active: false
		});
	};

	render(){
		return (
			<div className={`skill ${this.props.className} ${this.state.active ? 'active' : ''}`} onClick={this.activateSkill}>
				<div className="heading clearfix">
					<div className="skill-icon">{this.props.icon}</div>
					<h2>{this.props.children}</h2>
					<div className="skill-close" onClick={this.deactivateSkill}>
						<CrossIcon />
					</div>
				</div>

				<div className="skill-body">
					{<p>{this.props.text}</p>}
					<ul>
						{this.props.skills.map(function(skill, index){
							return <li key={'skill-' + index}>{skill}</li>;
						})}
					</ul>
				</div>
			</div>
		);
	};
}

module.exports = Contact;
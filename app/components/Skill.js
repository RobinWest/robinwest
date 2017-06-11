var React   = require('react');
// var Scroll  = require('react-scroll');

require('../css/components/skill.less');

var CrossIcon     = require('./icons/CrossIcon');

// var animateScroll = Scroll.animateScroll;

class Contact extends React.Component {
	constructor(props){
		super(props);

		// this.toggleState = this.toggleState.bind(this);
		this.activateSkill = this.activateSkill.bind(this);
		this.deactivateSkill = this.deactivateSkill.bind(this);
	};


	activateSkill(e){
		this.props.skill.active = true;
			
		this.props.setActiveSkill(this.props.skill.color);
	};
	deactivateSkill(e){
		e.stopPropagation();

		console.log('deactivate');

		this.props.skill.active = false;

		this.props.setActiveSkill('crimson');
	};

	render(){
		return (
			<div className={`skill ${this.props.skill.color} ${this.props.skill.active ? 'active' : ''}`} onClick={this.activateSkill}>
				<div className="heading clearfix">
					<div className="skill-icon">{this.props.skill.icon}</div>
					<h2>{this.props.skill.name}</h2>
					<div className="skill-close" onClick={this.deactivateSkill}>
						<CrossIcon />
					</div>
				</div>

				<div className="skill-body">
					{<p>{this.props.skill.text}</p>}
					<ul>
						{this.props.skill.tags.map(function(tag, index){
							return <li key={'tag-' + index}>{tag}</li>;
						})}
					</ul>
				</div>
			</div>
		);
	};
}

module.exports = Contact;
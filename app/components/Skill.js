var React = require('react');

require('../css/components/skill.less');

var CrossIcon     = require('./icons/CrossIcon');

class Contact extends React.Component {
	constructor(props){
		super(props);

		this.toggleState = this.toggleState.bind(this);
		this.activateSkill = this.activateSkill.bind(this);
		this.deactivateSkill = this.deactivateSkill.bind(this);

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

		currentTarget.scrollIntoView();
			
		this.setState({
			active: true
		});
	};
	deactivateSkill(e){
		console.log(e);
		var currentTarget = e.currentTarget;
		e.stopPropagation();

		console.log(currentTarget);

		this.setState({
			active: false
		});
	};

	render(){
		return (
			<div className={`skill ${this.props.className} ${this.state.active ? 'active' : ''}`} onClick={this.activateSkill}>
				<div className="heading clearfix">
					<div className="skill-icon">{this.props.icon}</div>
					<h3>{this.props.children}</h3>
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
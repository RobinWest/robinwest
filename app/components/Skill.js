var React = require('react');

require('../css/components/skill.less');

var CrossIcon = require('./icons/CrossIcon');

const Contact = (props) => {
	return (
		<div className={`skill ${props.skill.color} ${props.active ? 'active' : ''}`} onClick={(e) => props.toggleSkill(e, props.skill)}>
			<div className="heading clearfix">
				<div className="skill-icon">{props.skill.icon}</div>
				<h2>{props.skill.name}</h2>
				<div className="skill-close" onClick={(e) => props.toggleSkill(e, props.active ? {} : props.skill)}>
					<CrossIcon />
				</div>
			</div>

			<div className="skill-body">
				{props.skill.text}
				<ul>
					{props.skill.tags.map(function(tag, index){
						return <li key={'tag-' + index}>{tag}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}

module.exports = Contact;
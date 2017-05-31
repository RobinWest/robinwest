var React = require('react');

var Skill           = require('../components/Skill');

var EmbedSlashIcon  = require('../components/icons/EmbedSlashIcon');
var TerminalIcon    = require('../components/icons/TerminalIcon');
var PaintRollerIcon = require('../components/icons/PaintRollerIcon');

class SkillsContainer extends React.Component {
	constructor(props){
		super(props);

		this.skills = [
			{
				name: 'Front end',
				icon: <EmbedSlashIcon />,
				className: 'lake',
				skills: [
					'HTML',
					'CSS',
					'JavaScript',
					'React',
					'AngularJS 1.x',
					'NWJS',
					'LESS'
				]
			},{
				name: 'Back end',
				icon: <TerminalIcon />,
				className: 'moss',
				skills: [
					'PHP',
					'SQL',
					'Linux',
					'Node.js',
					'Git',
					'npm',
					'Gulp',
					'Grunt',
					'Webpack'
				]
			},{
				name: 'Design tools',
				icon: <PaintRollerIcon />,
				className: 'crimson',
				skills: [
					'Photoshop',
					'Illustrator',
					'After Effects',
					'Sketch',
					'InVision',
					'Balsamiq',
					'Pen & Paper'
				]
			}
		];
	};

	render(){
		return (
			<div className="skills-container">
				{/*<h2>Skills</h2>*/}
				{this.skills.map(function(skill, index){
					return <Skill key={'skillContainer-' + index} icon={skill.icon} className={skill.className} skills={skill.skills}>{skill.name}</Skill>;
				})}
			</div>
		);
	};
}

module.exports = SkillsContainer;
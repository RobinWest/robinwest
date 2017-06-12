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
				active: false,
				name: 'Front end',
				icon: <EmbedSlashIcon />,
				color: 'crimson',
				text: 'The user is always at the forefront of anything I do, and this has naturally led me towards specialising in front end development. With front end technology moving faster than ever, it\'s important to remember good practices and learn quickly. Learning new things is the reason I enjoy my work. I choose appropriate and modern tools and always try to make my code readable and clear for the next person who comes across it.',
				tags: [
					'HTML',
					'CSS',
					'JavaScript',
					'React',
					'AngularJS 1.x',
					'NWJS',
					'LESS'
				]
			},{
				active: false,
				name: 'Back end',
				icon: <TerminalIcon />,
				color: 'moss',
				text: 'I beleive that the back end is an important part of the overall user experience and this has driven me to become comfortable with technologies and concepts involved in storing and retreiving data. REST APIs, relational databases, Apache setups and cloud computing consoles are all things I\'m used to working with. I am also comfortable setting up and using tooling for front end asset processing, just to make life a little easier for myself and the team.',
				tags: [
					'PHP',
					'SQL',
					'Linux',
					'Node.js',
					'Git',
					'npm',
					'Gulp',
					'Grunt',
					'Webpack',
					'AWS & GCE'
				]
			},{
				active: false,
				name: 'Design tools',
				icon: <PaintRollerIcon />,
				color: 'lake',
				text: 'I like to start projects with a sketch session to get as many different perspectives from as many stakeholders as possible. Then I usually take what I\'ve learned about the problem and try to create a prototype - either on paper, in code, or using mockup software. Finally I put together any required high-fidelity designs or assets using the Adobe suite or Sketch. This approach helps to separate the interface functionality from the shiny design so that the user\'s requirements are always kept a priority.',
				tags: [
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
				<div className="skills-container" id="skills">
				{this.skills.map(function(skill, index){
					return <Skill key={'skill-' + index} skill={skill} setActiveSkill={this.props.setActiveSkill}></Skill>;
				}, this)}
			</div>
		);
	};
}

module.exports = SkillsContainer;
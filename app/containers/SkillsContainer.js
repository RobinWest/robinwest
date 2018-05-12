var React = require('react');

var Skill = require('../components/Skill');

var EmbedSlashIcon  = require('../components/icons/EmbedSlashIcon');
var TerminalIcon    = require('../components/icons/TerminalIcon');
var PaintRollerIcon = require('../components/icons/PaintRollerIcon');

class SkillsContainer extends React.Component {
	constructor(props){
		super(props);

		this.toggleSkill     = this.toggleSkill.bind(this);

		this.skills = [
			{
				id: 1,
				name: 'Front end',
				icon: <EmbedSlashIcon />,
				color: 'crimson',
				text: (
					<p>The user's needs have always been the primary focus of my work. This naturally led me to specialise in front end development, combining my love of design, building things, and interest in human psychology. With front end development moving as fast as it does, it's given me a welcome challenge keeping up to date with the latest technologies. I learn quickly, write scalable code using best practices, and ensure that my work is clear, concise and well documented for the next person who comes across it - even if that's just future-me!</p>
					),
				tags: [
					'HTML',
					'CSS',
					'JavaScript',
					'React',
					'AngularJS 1.x',
					'Karma & Jasmine',
					'Backbone & Underscore',
					'jQuery',
					'NWJS',
					'LESS'
				]
			},{
				id: 2,
				name: 'Back end',
				icon: <TerminalIcon />,
				color: 'moss',
				text: (
						<p>I believe that the back end is an important part of the overall user experience and this has driven me to become comfortable with technologies and concepts involved in storing and retreiving data. REST APIs, relational databases, Apache setups and cloud computing consoles are all things I'm used to working with. I am also comfortable setting up and using tooling for front end asset processing, just to make life a little easier for myself and the team.</p>
					),
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
					'AWS & GCP'
				]
			},{
				id: 3,
				name: 'Design tools',
				icon: <PaintRollerIcon />,
				color: 'lake',
				text: (
					<p>I like to start projects with a sketch session to get different perspectives from as many stakeholders as possible. I then take what I've learned about the problem and try to create a solution by prototyping - either on paper, in code, or using mockup software. Ideally this will be tested on real users before finally putting together any required high-fidelity designs or assets using the Adobe suite or Sketch. This approach helps to separate the interface functionality from the shiny design so that the user's requirements are always kept a priority.</p>
					),
				tags: [
					'Sketch',
					'Pen & Paper',
					'Photoshop',
					'Illustrator',
					'After Effects',
					'InVision',
					'Balsamiq',
				]
			}
		];

		this.state = {
			skills: this.skills
		}
	};

	toggleSkill(e, skill){
		e.stopPropagation();

		this.props.setActiveSkill(skill);
	};

	render(){
		return (
				<div className={`skills-container ${this.props.activeSkill.id ? 'active' : ''}`} id="skills">
				{this.state.skills.map(function(skill, index){
					return <Skill key={'skill-' + index} skill={skill} active={this.props.activeSkill.id === skill.id ? true : false} toggleSkill={this.toggleSkill}></Skill>;
				}, this)}
			</div>
		);
	};
}

module.exports = SkillsContainer;
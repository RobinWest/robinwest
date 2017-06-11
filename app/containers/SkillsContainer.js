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
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi officiis fuga porro expedita amet cupiditate voluptas tenetur incidunt commodi, vel exercitationem odio, deserunt natus tempora architecto dolor magnam quae unde.',
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
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, voluptate, eum impedit praesentium mollitia dolorum commodi, placeat pariatur sit tenetur facilis repellat debitis consectetur excepturi natus aspernatur ratione deleniti, maxime.',
				tags: [
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
				active: false,
				name: 'Design tools',
				icon: <PaintRollerIcon />,
				color: 'lake',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi placeat temporibus dolore, ad, non tempora, voluptas mollitia obcaecati deserunt similique aperiam cum qui delectus. Nesciunt adipisci, dicta inventore velit error!',
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
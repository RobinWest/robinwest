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
				className: 'crimson',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi officiis fuga porro expedita amet cupiditate voluptas tenetur incidunt commodi, vel exercitationem odio, deserunt natus tempora architecto dolor magnam quae unde.',
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
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, voluptate, eum impedit praesentium mollitia dolorum commodi, placeat pariatur sit tenetur facilis repellat debitis consectetur excepturi natus aspernatur ratione deleniti, maxime.',
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
				className: 'lake',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi placeat temporibus dolore, ad, non tempora, voluptas mollitia obcaecati deserunt similique aperiam cum qui delectus. Nesciunt adipisci, dicta inventore velit error!',
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
			<div className="skills-container" id="skills">
				{this.skills.map(function(skill, index){
					return <Skill key={'skillContainer-' + index} icon={skill.icon} className={skill.className} skills={skill.skills} text={skill.text}>{skill.name}</Skill>;
				})}
			</div>
		);
	};
}

module.exports = SkillsContainer;
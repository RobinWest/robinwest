var React             = require('react');

var BodyContainer     = require('./BodyContainer');
var SidebarContainer  = require('./SidebarContainer');

var Contact           = require('../components/Contact');

class MainContainer extends React.Component {
	constructor(){
		super();

		// this.activateSkill  = this.activateSkill.bind(this);
		this.setCornerArrow = this.setCornerArrow.bind(this);
		this.setActiveSkill = this.setActiveSkill.bind(this);

		this.state = {
			sidebar: {
				active: false
			},
			skill: {
				color: 'crimson'
			},
			arrow: {
				active: false
			}
		};
	}

	activateSidebar(){
		this.setState({
			sidebar: { active: true }
		});
	};

	// activateSkill(index, active = true){
	// 	// var skills = this.state.skills.copy();
	// 	var skills = this.state.skills.slice(),
	// 		color  = this.state.arrow.color;

	// 	// TODO change to id
	// 	// skills.setActive(index);

	// 	skills.map(function(skill, i){
	// 		skill.active = false;

	// 		if(active && index === i){
	// 			skill.active = active;
	// 			color = skill.className;
	// 		}

	// 		return skill;
	// 	});

	// 	this.setState({
	// 		skills: skills,
	// 		arrow: { active: this.state.arrow.active, color: color }
	// 	});
	// };

	setActiveSkill(color = 'crimson'){
		// console.log(color);

		this.setState({
			skill: { color: color }
		});
	};

	setCornerArrow(active = false){
		this.setState({
			arrow: { active: active }
		});

		// console.log(this.state.arrow.active);
	};

	render(){
		return (
			<div className="main-container">
				<SidebarContainer
					arrow={this.state.arrow}
					skill={this.state.skill}
				 />
				<BodyContainer 
					arrow={this.state.arrow}
					skill={this.state.skill}
					setActiveSkill={this.setActiveSkill}
					setCornerArrow={this.setCornerArrow}
				/>
			</div>
		);
	};
}

module.exports = MainContainer;
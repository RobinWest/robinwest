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
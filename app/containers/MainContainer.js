var React             = require('react');

var BodyContainer     = require('./BodyContainer');
var SidebarContainer  = require('./SidebarContainer');

class MainContainer extends React.Component {
	constructor(){
		super();

		this.setActiveArrow = this.setActiveArrow.bind(this);
		this.setActiveSkill = this.setActiveSkill.bind(this);

		this.state = {
			skill: {},
			arrow: {
				active: false
			}
		};
	}

	setActiveSkill(skill){
		this.setState({
			skill: skill
		});
	};

	setActiveArrow(active = false){
		this.setState({
			arrow: { active: active }
		});
	};

	render(){
		return (
			<div className="main-container">
				<SidebarContainer
					arrow={this.state.arrow}
					activeSkill={this.state.skill}
				 />
				<BodyContainer 
					arrow={this.state.arrow}
					activeSkill={this.state.skill}
					setActiveSkill={this.setActiveSkill}
					setActiveArrow={this.setActiveArrow}
				/>
			</div>
		);
	};
}

module.exports = MainContainer;
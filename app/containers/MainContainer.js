var React             = require('react');

var BodyContainer     = require('./BodyContainer');
var SidebarContainer  = require('./SidebarContainer');

var Contact           = require('../components/Contact');

class MainContainer extends React.Component {
	constructor(){
		super();

		this.state = {
			sidebar: {
				active: false
			},
			skills: {
				active: false
			}
		};
	}

	activateSidebar(){
		this.setState({
			sidebar: { active: true }
		});
	};

	activateSkill(){
		this.setState({
			skills: { active: true }
		});
	};

	render(){
		return (
			<div className="main-container">
				<SidebarContainer />
				<BodyContainer />
			</div>
		);
	};
}

module.exports = MainContainer;
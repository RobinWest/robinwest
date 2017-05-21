var React             = require('react');

var BodyContainer     = require('./BodyContainer');
var SidebarContainer  = require('./SidebarContainer');

var Contact           = require('../components/Contact');


class MainContainer extends React.Component {
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
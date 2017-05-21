var React = require('react');

var ContactsContainer = require('./ContactsContainer');
var Logo              = require('../components/Logo');
var MailIcon          = require('../components/icons/MailIcon');
var CrossIcon         = require('../components/icons/CrossIcon');

class SidebarContainer extends React.Component {
	constructor(props){
		super(props);

		// For the record, this is preposterous!
		this.toggleState = this.toggleState.bind(this);

		this.state = {
			active: false
		};
	};

	toggleState(e){
		this.setState({
			active: !this.state.active
		});
	};

	render(){
		return (
			<div className={`sidebar ${this.state.active ? 'active' : ''}`}>
				<Logo></Logo>

				<ContactsContainer />
				<a className="sidebar-toggle" onClick={this.toggleState}>
					{!this.state.active && `Contact `}
					{!this.state.active && <MailIcon />}
					{this.state.active && <CrossIcon />}
				</a>
			</div>
		);
	};
}

module.exports = SidebarContainer;
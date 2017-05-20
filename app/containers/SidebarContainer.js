var React = require('react');

var ContactsContainer = require('./ContactsContainer');
var Logo              = require('../components/Logo');

class SidebarContainer extends React.Component {
	constructor(props){
		super(props);

		// For the record, this is preposterous!
		this.toggleState = this.toggleState.bind(this);

		this.state = {
			active: false
		};
	}

	toggleState(e){
		this.setState({
			active: !this.state.active
		});
	}

	render(){
		return (
			<div className={`sidebar ${this.state.active ? 'active' : ''}`}>
				<Logo></Logo>
				
				<ContactsContainer />
				<a className="sidebar-toggle" onClick={this.toggleState}>Contact</a>
			</div>
		);
	}
}

module.exports = SidebarContainer;
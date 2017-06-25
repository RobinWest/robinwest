var React = require('react');

require('../css/components/sidebar.less');

var Logo    = require('./Logo');
var Contact = require('./Contact');

var MenuDownIcon  = require('./icons/MenuDownIcon');
var CrossIcon     = require('./icons/CrossIcon');

const Sidebar = (props) => {
	return (
		<div className={`sidebar ${props.active ? 'active' : ''} ${props.activeSkill.color ? props.activeSkill.color : ''} ${props.arrow.active ? 'arrow-active' : ''}`}>
			<div className="upper-container">
				<Logo></Logo>
				
				<div className="toggle-container">
					<a className="sidebar-toggle" onClick={props.toggleState}>
						{!props.active && `Contact `}
						{!props.active && <MenuDownIcon />}
						{props.active && `Close `}
						{props.active && <CrossIcon />}
					</a>
				</div>
			</div>

			<div className="contacts-container">
				{props.contacts.map(function(contact, index){
					return <Contact key={'contact-' + index} contact={contact}></Contact>;
				})}
			</div>
		</div>
	);
}

module.exports = Sidebar;
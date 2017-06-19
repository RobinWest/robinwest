var React  = require('react');

require('../css/components/sidebar.less');

// var ContactsContainer = require('./ContactsContainer');
var Logo    = require('../components/Logo');
var Contact = require('../components/Contact');

var MenuDownIcon  = require('../components/icons/MenuDownIcon');
var CrossIcon     = require('../components/icons/CrossIcon');

var InstagramIcon = require('../components/icons/InstagramIcon');
var MailIcon      = require('../components/icons/MailIcon');
var GithubIcon    = require('../components/icons/GithubIcon');
var TwitterIcon   = require('../components/icons/TwitterIcon');

class SidebarContainer extends React.Component {
	constructor(props){
		super(props);

		this.toggleState = this.toggleState.bind(this);

		this.state = {
			active: false
		};

		this.contacts = [
			{
				name: 'contact@robinwest.co.uk',
				icon: <MailIcon />,
				newTab: false,
				href: 'mailto:contact@robinwest.co.uk'
			},{
				name: 'Github',
				icon: <GithubIcon />,
				newTab: true,
				href: '//github.com/RobinWest'
			},{
				name: 'Twitter',
				icon: <TwitterIcon />,
				newTab: true,
				href: '//twitter.com/_robinpwest'
			},{
				name: 'Instagram',
				icon: <InstagramIcon />,
				newTab: true,
				href: '//www.instagram.com/robinpwest/'
			}
		];
	};

	toggleState(e){
		this.setState({
			active: !this.state.active
		});
	};

	render(){
		return (
			<div className={`sidebar ${this.state.active ? 'active' : ''} ${this.props.activeSkill.color ? this.props.activeSkill.color : ''} ${this.props.arrow.active ? 'arrow-active' : ''}`}>
				<div className="generic-container">
					<Logo></Logo>
					
					<div className="toggle-container">
						<a className="sidebar-toggle" onClick={this.toggleState}>
							{!this.state.active && `Contact `}
							{!this.state.active && <MenuDownIcon />}
							{this.state.active && `Close `}
							{this.state.active && <CrossIcon />}
						</a>
					</div>
				</div>

				<div className="contacts-container">
					{this.contacts.map(function(contact, index){
						return <Contact key={'contact-' + index} contact={contact}></Contact>;
					})}
				</div>
			</div>
		);
	};
}

module.exports = SidebarContainer;
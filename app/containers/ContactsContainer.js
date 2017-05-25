var React   = require('react');
var Contact = require('../components/Contact');

var InstagramIcon = require('../components/icons/InstagramIcon');
var MailIcon      = require('../components/icons/MailIcon');
var GithubIcon    = require('../components/icons/GithubIcon');
var TwitterIcon   = require('../components/icons/TwitterIcon');

class ContactsContainer extends React.Component {
	constructor(props){
		super(props);

		this.contacts = [
			{
				name: 'contact@robinwest.co.uk',
				icon: <MailIcon />,
				href: 'mailto:contact@robinwest.co.uk'
			},{
				name: 'Github',
				icon: <GithubIcon />,
				href: '//github.com/RobinWest'
			},{
				name: 'Twitter',
				icon: <TwitterIcon />,
				href: '//twitter.com/_robinpwest'
			},{
				name: 'Instagram',
				icon: <InstagramIcon />,
				href: '//www.instagram.com/robinpwest/'
			}
		];
	};

	render(){
		return (
			<div className="contacts-container">
				<h2>Contact</h2>
				{this.contacts.map(function(contact, index){
					return <Contact key={'contact-' + index} icon={contact.icon} href={contact.href}>{contact.name}</Contact>;
				})}
			</div>
		);
	};
}

module.exports = ContactsContainer;
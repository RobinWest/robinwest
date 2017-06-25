var React  = require('react');

var Sidebar = require('../components/Sidebar');

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
			<Sidebar active={this.state.active} toggleState={this.toggleState} arrow={this.props.arrow} activeSkill={this.props.activeSkill} contacts={this.contacts} />
		);
	};
}

module.exports = SidebarContainer;
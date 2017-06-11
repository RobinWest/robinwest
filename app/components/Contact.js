var React = require('react');

require('../css/components/contact.less');

class Contact extends React.Component {
	render(){
		return (
			<a href={this.props.contact.href} title={this.props.contact.children} target={`${this.props.contact.newTab ? '_blank' : ''}`} className="contact">
				{this.props.contact.icon}
				{this.props.contact.name}
			</a>
		);
	};
}

module.exports = Contact;
var React = require('react');

require('../css/components/contact.less');

const Contact = (props) => {
	return (
		<a href={props.contact.href} title={props.contact.children} target={`${props.contact.newTab ? '_blank' : ''}`} className="contact">
			{props.contact.icon}
			{props.contact.name}
		</a>
	);
}

module.exports = Contact;
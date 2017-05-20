var React = require('react');
var Contact = require('../components/Contact');

class ContactsContainer extends React.Component {
	render(){
		return (
			<div className="contacts-container">
				<h2>Contact</h2>
				<Contact />
				<Contact />
				<Contact />
				<Contact />
			</div>
		);
	}
}

module.exports = ContactsContainer;
var React = require('react');

class Contact extends React.Component {
	render(){
		return (
			<a href={this.props.href} title={this.props.children} target="_blank" className="contact">
				{this.props.icon}
				{this.props.children}
			</a>
		);
	};
}

module.exports = Contact;
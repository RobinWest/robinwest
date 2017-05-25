var React = require('react');

class Contact extends React.Component {
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
			<div className={`skill ${this.state.active ? 'active' : ''}`} onClick={this.toggleState}>
				<div className="clearfix">
					<div className="skill-icon">{this.props.icon}</div>
					<h3>{this.props.children}</h3>
				</div>

				<ul>
					{this.props.skills.map(function(skill, index){
						return <li key={'skill-' + index}>{skill}</li>;
					})}
				</ul>
			</div>
		);
	};
}

module.exports = Contact;
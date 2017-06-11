var React = require('react');
var Scroll  = require('react-scroll');

var SkillsContainer = require('./SkillsContainer');

var Body = require('../components/Body');

var animateScroll = Scroll.animateScroll;

class BodyContainer extends React.Component {
	constructor(props){
		super(props);

		this.handleScroll      = this.handleScroll.bind(this);
		this.handleActiveSkill = this.handleActiveSkill.bind(this);
	};

	handleScroll(e){
		var currentTarget = e.currentTarget,
			child = currentTarget.firstChild;

		this.props.setCornerArrow(false);

		if(currentTarget.scrollTop > child.offsetHeight - 20){
			this.props.setCornerArrow(true);
		}

		// console.log(currentTarget.scrollTop);
		// console.log(currentTarget.firstChild.offsetHeight);
	};

	handleActiveSkill(color){
		// var currentTarget = e.currentTarget;
		var bodyContainer = document.getElementById('body');

		animateScroll.scrollToBottom({containerId: 'body', duration: 300});

		setTimeout(function(){
			animateScroll.scrollToBottom({duration: 300});
		}, 300);

		this.props.setActiveSkill(color);
	};

	render(){
		return (
			<div className="body-container" id="body" onScroll={this.handleScroll}>
				<Body />
				<SkillsContainer 
					setActiveSkill={this.handleActiveSkill}
				/>
			</div>
		);
	};
}

module.exports = BodyContainer;
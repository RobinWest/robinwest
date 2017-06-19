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

		this.props.setActiveArrow(false);

		// Change the arrow color if its reasonably close
		if(currentTarget.scrollTop > child.offsetHeight - 20){
			this.props.setActiveArrow(true);
		}
	};

	handleActiveSkill(skill){
		// Only scroll if this is a new skill selection
		if(skill.id && skill.id !== this.props.activeSkill.id){
			animateScroll.scrollToBottom({containerId: 'body-container', duration: 300});

			setTimeout(function(){
				animateScroll.scrollToBottom({duration: 300});
			}, 300);
		}

		this.props.setActiveSkill(skill);
	};

	render(){
		return (
			<div className="body-container" id="body-container" onScroll={this.handleScroll}>
				<Body />
				<SkillsContainer 
					activeSkill={this.props.activeSkill}
					setActiveSkill={this.handleActiveSkill}
				/>
			</div>
		);
	};
}

module.exports = BodyContainer;
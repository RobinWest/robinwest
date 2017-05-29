var React = require('react');

var SkillsContainer = require('./SkillsContainer');


class BodyContainer extends React.Component {
	render(){
		return (
			<div className="body-container">
				<div className="body">
					<h1>Hi, I'm Robin</h1>
					<hr/>
					{/*<p>TODO: I have [component] experience, where the component will render the correct date at all times.</p>*/}
					<p>I'm a front end web developer specialising in JavaScript and UX design with [x years] experience. I am in the lucky minority of people that get to do one of their hobbies as a job!</p>
					<p>I currently live in the south of England and work in London for <a href="//www.kobas.co.uk" target="_blank">Kobas</a>, where I head up their UX and front end development efforts. Take a look at the skills section below to see what I use to get things done.</p>
					<p>When I'm not at work I like to indulge in my other hobbies. Watching and playing music, <a href="//www.instagram.com/robinpwest/" target="_blank">drawing things</a>, playing computer games or having a beer with my pals.</p>
					<SkillsContainer />
				</div>
			</div>
		);
	};
}

module.exports = BodyContainer;
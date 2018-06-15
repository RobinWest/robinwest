var React = require('react');

var Years = require('./Years');

const Body = (props) => {
	return (
		<div className="body">
			<h1>Hi, I'm Robin</h1>
			<hr/>
			<p>I'm a web developer specialising in front end and UX design with <Years /> experience and I'm lucky enough to do one of my hobbies for a job.</p>

			<p>I moved to Melbourne from the south of England where I worked in London for <a href="//www.kobas.co.uk" target="_blank">Kobas</a>, heading up their UX and front end development. I'm now looking for new opportunities and adventure Down Under. Take a look at the skills section below to see what I use to get things done. If you'd like to have a chat, feel free to get in touch!</p>

			<p>When I'm not at work I like to indulge in my other interests. Going to gigs, playing music, <a href="//www.instagram.com/robinpwest/" target="_blank">drawing stuff</a>, taking photos, watching horror movies, playing computer games or having a beer with my pals.</p>
		</div>
	);
}

module.exports = Body;
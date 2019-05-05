var React = require('react');

var Years = require('./Years');

const Body = (props) => {
	return (
		<div className="body">

      <h1>Hi, I'm Robin.</h1>

      <hr/>

      <p>A front end developer with over <Years /> of experience and a true passion for thoughtful products and design centered around excellent user experience.</p>

      <p>Half American, half British, and now in Melbourne after working in London for several years. I enjoy culture, travel and expanding my understanding of our world.</p>

      <p>Outside of work I like cooking, seeing gigs, playing music, <a href="//www.instagram.com/robinpwest/" target="_blank">illustration</a>, photography, video games and cheesy horror movies.</p>
		</div>
	);
}

module.exports = Body;
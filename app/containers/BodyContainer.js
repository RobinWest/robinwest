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
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eius quae, quo molestiae ullam nobis, deleniti delectus soluta at, aperiam, fugiat amet! Dolorem rerum, quo, ullam illum voluptatibus quisquam porro.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eius quae, quo molestiae ullam nobis, deleniti delectus soluta at, aperiam, fugiat amet! Dolorem rerum, quo, ullam illum voluptatibus quisquam porro.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eius quae, quo molestiae ullam nobis, deleniti delectus soluta at, aperiam, fugiat amet! Dolorem rerum, quo, ullam illum voluptatibus quisquam porro.</p>
					<SkillsContainer />
				</div>
			</div>
		);
	};
}

module.exports = BodyContainer;
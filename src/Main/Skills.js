import React from 'react';
import '../css/fontello.css';
const Skills=()=>{

	return(
		<section id="second" >
			<div id="skills"className="text-center" >
				<div>

					<h4 className="text-custom-2 ">Languages and Technologies</h4>
					<h1 className="mb-5">
						<i className="devicon-html5-plain" title="HTML5 - Level High"></i>
						<i className="devicon-css3-plain" title="CSS3 - Level Medium"></i>
						<i className="devicon-javascript-plain" title="JAVASCRIPT - Level High"></i>
						<i className="devicon-nodejs-plain" title="NODEJS - Level High"></i>
						<i className="devicon-csharp-plain" title="C# - Level Medium"></i>
						<i className="devicon-mysql-plain" title="MYSQL - Level Medium"></i>
						<i className="devicon-postgresql-plain" title="POSTGRES - Level Medium"></i>
						<i className="devicon-react-plain" title="REACT - Level High"></i>
						<i className="cib-jquery" title="JQUERY - Level High"></i>
						<i className="fab icon-redux" title="REDUX - Level Medium"></i>
						<i className="fas fa-terminal" title="BASH - Level Medium"></i>
					</h1>
				</div>
				<div>

					<h4 className="text-custom-2 ">Version control, CI and Platforms</h4>
					<h1 className="mb-5">
						<i className="devicon-git-plain" title="GIT - Level High"></i>
						<i className="cib-jest" title="JEST - Level Medium"></i>
						<i className="devicon-github-plain" title="GITHUB"></i>
						<i className="devicon-bitbucket-plain" title="BITBUCKET"></i>
						<i className="fab fa-jenkins" title="JENKINS"></i>
						<i className="devicon-ubuntu-plain" title="UBUNTU"></i>
						<i className="devicon-bootstrap-plain" title="BOOTSTRAP"></i>

					</h1>
				</div>
				<div>
					<h4 className="text-custom-2 ">Social and Email Platforms integration</h4>
					<h1 className="mb-5">
						<i className="cib-facebook-f" title="FACEBOOK"></i>
						<i className="cib-instagram" title="INSTAGRAM"></i>
						<i className="cib-slack" title="SLACK"></i>
						<i className="cib-hubspot" title="HUBSPOT"></i>
						<i className="cib-mailchimp" title="MAILCHIMP"></i>
					</h1>

				</div>
				<div>
					<h4 className="text-custom-2 ">Secondary skills and interests</h4>
					<h1 className="mb-5">
						<i className="cib-adobe-photoshop" title="PHOTOSHOP"></i>
						<i className="cib-gimp" title="GIMP"></i>
						<i className="cib-inkscape" title="INKSCAPE"></i>
					</h1>

				</div>



			</div>
		</section>
	)
}
export default Skills;
import React from 'react';
import '../css/fontello.css';
const Skills=()=>{

	return(
		<div className="flex column text-center full-screen no-margin  justify-center skills-bgcolor">
		<div id="skills" className="padding-left-xxl invisible abs">
			<h2 className="text-custom-2 ">{"<"}Personal<span className="text-custom-1">Skills </span>{">"}</h2>
			<h1 className="no-spacing">
				<i className="fab fa-html5 icons-color spacing" aria-label="HTML5"></i>
				<i className="fab fa-css3-alt icons-color spacing" aria-label="CSS3"></i>
				<i className="fab fa-js-square icons-color spacing" aria-label="JAVASCRIPT"></i>
			</h1>
			<h1 className="no-spacing">
				<i className="fab fa-react icons-color spacing" aria-label="REACT"></i>
				<i className="fab icon-redux icons-color spacing " aria-label="REDUX"></i>
			</h1>
			<h1 className="no-spacing">
				<i className="fab fa-github-square icons-color spacing" aria-label="GITHUB"></i>
				<i className="fab fa-npm icons-color spacing" aria-label="NPM"></i>
				<i className="fab fa-node icons-color spacing " aria-label="NODE.JS"></i>
			</h1>
			<h1 className="no-spacing">
				<i className="fab icon-csharp icons-color spacing double" aria-label="C#"></i>
				<i className="fab icon-psql icons-color spacing " aria-label="POSTGRES"></i>
			</h1>
			</div>
		</div>
	)
}
export default Skills;
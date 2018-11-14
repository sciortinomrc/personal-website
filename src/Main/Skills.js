import React from 'react';
import '../css/fontello.css';
const Skills=()=>{

	return(
		<div id="second" >
		<div id="skills" >
			<h2 className="text-custom-2 ">{"<"}Personal<span className="text-custom-1">Skills </span>{">"}</h2>
			<h1>
				<i className="fab fa-html5" aria-label="HTML5"></i>
				<i className="fab fa-css3-alt" aria-label="CSS3"></i>
				<i className="fab fa-js-square" aria-label="JAVASCRIPT"></i>
			</h1>
			<h1>
				<i className="fab fa-react" aria-label="REACT"></i>
				<i className="fab icon-redux" aria-label="REDUX"></i>
			</h1>
			<h1>
				<i className="fab fa-github-square" aria-label="GITHUB"></i>
				<i className="fab fa-npm" aria-label="NPM"></i>
				<i className="fab fa-node" aria-label="NODE.JS"></i>
			</h1>
			<h1>
				<i className="fab icon-csharp" aria-label="C#"></i>
				<i className="fab icon-psql" aria-label="POSTGRES"></i>
			</h1>
			</div>
		</div>
	)
}
export default Skills;
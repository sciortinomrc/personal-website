import React from 'react';
import '../css/fontello.css';
const Skills=()=>{

	return(
		<div id="second" >
		<div id="skills" >
			<h2 className="text-custom-2 ">{"<"}Personal<span className="text-custom-1">Skills </span>{">"}</h2>
			<h1>
				<i className="fab fa-html5" title="HTML5"></i>
				<i className="fab fa-css3-alt" title="CSS3"></i>
				<i className="fab fa-js-square" title="JAVASCRIPT"></i>
			</h1>
			<h1>
				<i className="fab fa-react" title="REACT"></i>
				<i className="fab icon-redux" title="REDUX"></i>
			</h1>
			<h1>
				<i className="fab fa-github-square" title="GITHUB"></i>
				<i className="fab fa-npm" title="NPM"></i>
				<i className="fab fa-node" title="NODE.JS"></i>
			</h1>
			<h1>
				<i className="fab icon-csharp" title="C#"></i>
				<i className="fab icon-psql" title="POSTGRES"></i>
			</h1>
			</div>
		</div>
	)
}
export default Skills;
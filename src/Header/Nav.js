import React from 'react';
import './Header.css';

const Header=()=>{
	return(
		<div id="navigation">
			<div >
				<h1 id="nav-text" ><span className="text-orange">Everyone </span><span className="disappear">in this country </span> <span className="text-lblue">should </span><span className="disappear">learn how to </span> <span className="text-green">code</span><span className="disappear">, it teaches you how to think."</span></h1>
			</div>
			<div id="nav">
			<a id="afirst" href="#first">Marco Sciortino</a>
			<a id="asecond" href="#second">Skills</a>
			<a id="athird" href="#third">Portfolio</a>
			<a id="afourth" href="#fourth">About</a>
			</div>
		</div>
		
		)
}


export default Header;
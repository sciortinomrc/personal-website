import React from 'react';
import './Header.css';

const Header=()=>{
	return(
		<div id="navigation">
			<div className="text-white">
			<h2><span className="text-orange">Everyone </span><span className="text-lblue">should </span><span className="text-green">code</span></h2>
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
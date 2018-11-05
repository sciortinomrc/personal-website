import React from 'react';
import './Header.css';

const Header=()=>{
	return(
		<div id="navigation" className="flex navigation bg-black d-none">
			<div className="w-75 margin-auto text-white">
			<h2><span className="text-orange text-">Everyone </span><span className="text-lblue">should </span><span className="text-green">code</span></h2>
			</div>
			<div id="nav" className="padding-top-md">
			<a id="afirst" href="#first" className="padding-sides">Marco Sciortino</a>
			<a id="asecond" href="#second" className="padding-sides">Skills</a>
			<a id="athird" href="#third" className="padding-sides">Portfolio</a>
			<a id="afourth" href="#fourth" className="padding-sides">About</a>
			</div>
		</div>
		
		)
}


export default Header;
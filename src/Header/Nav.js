import React from 'react';
import './Header.css';

const Header=()=>{
	return(
		<div id="navigation" className="flex navigation bg-black d-none">
			<div className="w-75 margin-auto text-white">
			<h2><span className="text-orange text-">Everyone </span><span className="text-lblue">should </span><span className="text-green">code</span></h2>
			</div>
			<div id="nav">
			<a href="#first">PersonalData</a>
			</div>
		</div>
		
		)
}


export default Header;
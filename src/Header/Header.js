import React from 'react';
import './Header.css';

const Header=()=>{
	return(
		<div id="header" className="flex text-center full-screen margin-auto column bg-black">
			<div className="flex column w-75 margin-auto text-white">
				<h1 className="no-spacing"><span className="text-orange">Everyone</span> in this country <span className="text-lblue">should</span> learn how to <span className="text-green">code</span>, it teaches you how to think."</h1>
				<p className="text-right">-Steve Jobs</p>
			</div>
			<div id="arrow-down" className="margin-auto margin-bottom-none ">
				<i className="fas fa-angle-down flash abs"></i>
			</div>
		</div>
		
		)
}


export default Header;
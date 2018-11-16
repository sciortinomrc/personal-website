import React from 'react';
import './Header.css';

const Header=()=>{
	return(
		<div id="header" >
			<div >
				<h1 ><span className="text-orange">Everyone </span>in this country <span className="text-lblue">should </span>learn how to <span className="text-green">code</span>, it teaches you how to think."</h1>
				<p>-Steve Jobs</p>
			</div>
			<div id="arrow-down" >
				<i className="fas fa-angle-down flash"></i>
			</div>
		</div>
		
		)
}


export default Header;
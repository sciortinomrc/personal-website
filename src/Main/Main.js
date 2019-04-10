import React from 'react';
import PersonalData from './PersonalData';
import Skills from './Skills';
import PersonalDescription from './PersonalDescription';
import Portfolio from './Portfolio';
import url from "../Resume.html";



const Main=()=>{
	return(
		<div className="background">
			<a href={url}>Resume</a>
			<PersonalData />
			<hr className="hr-padding no-spacing"/>
			<Skills />
			<hr className="hr-padding no-spacing"/>
			<Portfolio />
			<hr className="hr-padding no-spacing"/>
			<PersonalDescription />
			<hr className="no-spacing no-spacing"/>
		</div>
		)
}


export default Main;
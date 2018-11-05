import React from 'react';
import './Main.css';
import PersonalData from './PersonalData';
import Skills from './Skills';
import PersonalDescription from './PersonalDescription';
import Portfolio from './Portfolio';



const Main=()=>{
	return(
		<div className="background">
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
import React from 'react';
import PersonalData from './PersonalData';
import Skills from './Skills';
import PersonalDescription from './PersonalDescription';
import Portfolio from './Portfolio';



const Main=({refr})=>{
	return(
		<div ref={refr} className="background">
			<PersonalData>
				<PersonalDescription />
			</PersonalData>
			<hr className="no-spacing no-spacing"/>
			<Skills />
			<hr className="hr-padding no-spacing"/>
			<Portfolio />
			<hr className="hr-padding no-spacing"/>
		</div>
		)
}


export default Main;
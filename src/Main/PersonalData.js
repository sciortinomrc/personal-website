import React from 'react';
import PDF from '../Pics/Resume.pdf'
import photo from '../Pics/photo.jpg';
const PersonalData=()=>{
	return(
		<div id="first">
			<div  id="personal-data">
				<img src={photo} id="pic" alt="Me"/>
				<h1 className="text-white">{"Marco Sciortino"}</h1>
				<h2 className="text-custom-2"><span className="text-custom-1"> Full-Stack </span> Web Developer </h2>
				<p><span className="text-custom-2 text-20">--UK-based Italian--</span>  Open to contract opportunities - </p>
			<a href={PDF} target="_blank" rel="noopener noreferrer">Download Resume</a>			</div>

		</div>
	)
}
export default PersonalData;
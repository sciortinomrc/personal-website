import React from 'react';
import photo from '../Pics/photo.jpg';
const PersonalData=()=>{
	return(
		<div id="first" className="flex column text-center full-screen margin-auto  justify-center personal-bgcolor">
			<div  id="personal-data" className="invisible abs w-100 no-spacing">
			<img src={photo} id="pic" alt="Me" className="pic-size rounded"/>
			<h1 className="text-white no-spacing">{"Marco Sciortino"}</h1>
			<h2 className="text-custom-2"><span className="text-custom-1"> Full-Stack </span> Web Developer </h2>
			<p><span className="text-custom-2 text-20">--UK-based italian--</span>  Open to contract opportunities - </p>
			</div>

		</div>
	)
}
export default PersonalData;
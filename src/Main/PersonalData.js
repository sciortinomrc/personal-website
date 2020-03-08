import React from 'react';
import PDF from '../Pics/Resume.pdf'
import photo from '../Pics/photo.jpg';
const PersonalData=(props)=>{
	const [show,setShow] = React.useState(false);
	window.addEventListener("scroll",()=>{
		if(window.scrollY>0){
			setShow(true)
		}
		else{
			setShow(false);
		}
	})
	const mainClasses = show?"d-flex flex-column justify-content-center main-height":"d-flex flex-column justify-content-center dark-bg mivh";
	const divClasses = !show?"ml-5 mt-3 text-white":"ml-5 mt-3";
	return(
		<section id="first" class={mainClasses}>
			<div id="personal-data">
				<img src={photo} id="pic" alt="Me"/>
				<div class={divClasses}>
					<h1 >{"Marco Sciortino"}</h1>
					<h2 ><span> Full-Stack </span> Web Developer </h2>
					<p>--UK-based Italian - Problem solver - Algorithm enthusiast - Great at making things happen-- </p>
					<p> Currently working @ <a href="https://meterian.com" target="_blank" rel="noopener noreferrer"><img height={50} src="https://meterian.com/images/logo2.png" alt="Meterian"></img></a></p>
					<p id="resume"><a href={PDF} target="_blank" rel="noopener noreferrer">Download Resume</a></p>	
				</div>
			</div>
					{show?props.children:""}		

		</section>
	)
}
export default PersonalData;
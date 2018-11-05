import React from 'react';
import './Bottom.css';

function copyToClipboard (str) {
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   el.value = str;
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);

   alert("Copied to clipboard")
}
const Bottom=()=>{
	return(
		<div className="display-flex column no-spacing content-center padding-top-md padding-bottom-lg text-center background-bottom text-white text-size-25">
		<h2>
			<a href="https://www.facebook.com/marco.sciortino.37" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f padding-sides"></i></a>
			<a href="https://www.linkedin.com/in/marco-sciortino-429938155/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in padding-sides"></i></a>
			<a href="https://github.com/sciortinomrc" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt padding-sides"></i></a>
			<a href="tel:+447541494830"><i className="fas fa-mobile-alt padding-sides"></i></a>
			<a href="mailto:sciortino.mrc@gmail.com"><i className="fas fa-at padding-sides" ></i>	</a>
		</h2>	
		</div>
	)
}
export default Bottom;
import React from 'react';
import './Header.css';
import logo from '../images/logo.png';

const Header=()=>{	
	const [show,setShow] = React.useState(false);
	const [imgHeight, setHeight] = React.useState(150)
	window.addEventListener("scroll",()=>{
		if(window.scrollY>0){
			setHeight(80)
			setShow(true)
		}
		else{
			setHeight(150);
			setShow(false);
		}
	})
	let navClasses = "navbar navbar-light smallnav justify-content-center";
	if(show) navClasses = "navbar navbar-light sticky-top smallnav nav-shadow";
	return(
		<nav className={navClasses}>
			<a className="navbar-brand" href="/">
				<img src={logo} height={imgHeight} className="d-inline-block align-top m-3" alt="" />	
			</a>
		</nav>
		
	)
}


export default Header;
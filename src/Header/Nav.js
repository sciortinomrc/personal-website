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
	let navClasses = "navbar navbar-light smallnav";
	if(show) navClasses = "navbar navbar-light sticky-top smallnav nav-shadow";
	return(
		<nav className={navClasses}>
			<a className="navbar-brand" href="/" style={{margin:show?"0px":"auto"}}>
				<img src={logo} style={{height:imgHeight}} className="d-inline-block align-top m-3" alt="" />	
			</a>
		</nav>
		
	)
}


export default Header;
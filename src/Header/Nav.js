import React from 'react';
import './Header.css';
import logo from '../images/logo.png';

const Header=()=>{	
	const mobile = "ontouchstart" in document.documentElement;
	const [state, setState] = React.useState({show:false, imgHeight:window.scrollY>0?(mobile?50:80):(mobile?130:150)})
	let allow = true;
	
	window.$(window).off().on("scroll",()=>{
		if(window.scrollY>0){
			if(!show && allow){
				allow=false;
				setState({show: true, imgHeight: mobile?50:80})
				setTimeout(()=>allow=true,3000);
			}
		}
		else{
			if(show && allow){
				allow=false;
				setState({show: false, imgHeight: mobile?130:150})
				setTimeout(()=>allow=true,3000);
			}
		}
	})

	const {show,imgHeight} = state;
	let navClasses = "navbar navbar-light smallnav whole";
	if(show) navClasses = "navbar navbar-light smallnav nav-shadow";

	return(
		<nav className={navClasses}>
			<a className="navbar-brand" href="/" style={{margin:show?"0px 0px":"0px calc( 50% - 150px )"}}>
				<img src={logo} style={{height:imgHeight}} className="d-inline-block align-top m-3" alt="" />	
			</a>
		</nav>
		
	)
}


export default Header;
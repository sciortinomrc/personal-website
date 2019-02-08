import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Header/Nav';
import Main from './Main/Main';
import Bottom from './Bottom/Bottom';
import './Main/Animations.css';

class App extends Component {
	componentDidMount(){
		const head = document.getElementById("header");
		const h1=document.getElementById("text");
		const navh1=document.getElementById("nav-text");
		const nav=document.getElementById("navigation");
		const personal=document.getElementById("personal-data");
		const skills=document.getElementById("skills");
		const portfolio=document.getElementById("portfolio");
		const arrowDown=document.getElementById("arrow-down");
		const steveJobs=document.getElementById("jobs");
		let value=steveJobs.offsetTop+steveJobs.offsetHeight+10
		let triggerPoint=(h1.offsetTop*2)+h1.offsetHeight+20;
		let boundingHead, scale;
		window.addEventListener("resize",(event)=>{
			value=steveJobs.offsetTop+steveJobs.offsetHeight+10
			triggerPoint=(h1.offsetTop*2)+h1.offsetHeight+20;
			boundingHead=head.getBoundingClientRect();
			scale=((boundingHead.height+boundingHead.top)/(triggerPoint-h1.offsetTop));
		})
		window.addEventListener('scroll',(event)=>{
			boundingHead=head.getBoundingClientRect();
			arrowDown.style.display=(window.innerHeight+boundingHead.top<triggerPoint)?"none":"";
			steveJobs.style.display=(value>=window.innerHeight+boundingHead.top)?"none":"";
			//header - nav
				scale=((boundingHead.height+boundingHead.top)/(triggerPoint-h1.offsetTop));
				console.log(scale)
				if(window.innerHeight+boundingHead.top<triggerPoint && scale>0.2){
					head.style.opacity="0"
					if(scale>0.4 && scale<1){
						navh1.style.fontSize="calc("+window.getComputedStyle(h1,null).fontSize+"*"+scale+")";
					}
					nav.style.display="";
					nav.children[1].style.display=""
					nav.style.height=window.innerHeight+boundingHead.top+"px"
					const toHide=document.getElementsByClassName("disappear");					
					[...toHide].map(element=>{
						element.classList.remove("disappear-animation");
						return null 
					})
				}
				else if(scale<=0.2){
					const toHide=document.getElementsByClassName("disappear");
					[...toHide].map(element=>{
						element.classList.add("disappear-animation");
						return null
					})
				}
				else {
					head.style.opacity=1;
					nav.style.display="none"
				}

			// //remaining

				switch(true){
					case (scale<-3.80):{
						document.getElementById("athird").style.fontWeight="normal";
						document.getElementById("athird").style.backgroundColor="";
						document.getElementById("afourth").style.fontWeight="bold";
						document.getElementById("afourth").style.backgroundColor="#A7D1F3";
						break;
					}
					case (scale<-2.80):{
						document.getElementById("asecond").style.fontWeight="normal"
						document.getElementById("asecond").style.backgroundColor="";
						document.getElementById("athird").style.fontWeight="bold"
						document.getElementById("athird").style.backgroundColor="#67B9FD";
						document.getElementById("afourth").style.fontWeight="normal"
						document.getElementById("afourth").style.backgroundColor="";
						portfolio.classList.add("skills"); break;
					}
					case (scale<-0.60):{
						document.getElementById("afirst").style.fontWeight="normal"
						document.getElementById("afirst").style.backgroundColor="";
						document.getElementById("asecond").style.fontWeight="bold"
						document.getElementById("asecond").style.backgroundColor="#3AA6FF";
						document.getElementById("athird").style.fontWeight="normal"
						document.getElementById("athird").style.backgroundColor="";
						portfolio.classList.remove("skills");
						skills.classList.add("skills"); break;
					}
					case (scale<0.3):{
						document.getElementById("afirst").style.fontWeight="bold"
						document.getElementById("afirst").style.backgroundColor="#038DFF";
						document.getElementById("asecond").style.fontWeight="normal"
						document.getElementById("asecond").style.backgroundColor="";
						skills.classList.remove("skills");
						personal.classList.add("appear"); break;
					}
					
					default: {
						portfolio.classList.remove("skills");
						personal.classList.remove("appear");
						skills.classList.remove("skills"); break;
					}
				}


	})
}
  render() {
    return (
      <div>
	    <Header />
	    <Nav /> 
	    <Main />
	    <Bottom />
      </div>
    );
  }
}

export default App;

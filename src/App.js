import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Header/Nav';
import Main from './Main/Main';
import Bottom from './Bottom/Bottom';
import './Main/Animations.css';

class App extends Component {
	componentDidMount(){
		const head=document.getElementById("header");
		const nav=document.getElementById("navigation");
		const personal=document.getElementById("personal-data");
		const skills=document.getElementById("skills");
		const portfolio=document.getElementById("portfolio");
		const about=document.getElementById("personal-data");
		const arrowDown=document.getElementById("arrow-down");
		nav.children[0].children[0].addEventListener("animationend",(event)=>{
						if(event.animationName==="disappear"){
							console.log("animation end")
							nav.children[0].style.width="50%"
							nav.children[1].style.width="50%"
							nav.children[1].style.display="flex"
						}
							
					})
		window.addEventListener('scroll',(event)=>{
			const boundingHead=head.getBoundingClientRect()
			const boundingH1=head.children[0].children[0];
			const heightTrigger=boundingH1.offsetHeight;
			const triggerPoint=(window.innerHeight+boundingHead.top)/window.innerHeight;
			console.log({headerTop: boundingHead.top, innerHTML: window.innerHeight, triggerPoint: heightTrigger})
			console.log({trigger: window.innerHeight+boundingHead.top, triggerPoint: heightTrigger})
			//nav height
			//	document.styleSheets[2].cssRules[14].style.height
			//nav h1 
			//	document.styleSheets[2].cssRules[15]
			//arrow
				if(window.innerHeight+boundingHead.top<heightTrigger+200){
					arrowDown.classList.add("d-none")
				}
				else{
					arrowDown.classList.remove("d-none")
				}
			//header - nav
				if(window.innerHeight+boundingHead.top<=100){
					nav.children[0].style.width="100%"
					nav.children[1].style.display="flex"
					head.style.opacity="0"
					nav.children[0].children[0].style.fontSize="2em"
					nav.style.height=100+"px";
					nav.children[0].children[0].style.textAlign="left";
					const toHide=document.getElementsByClassName("disappear");
					[...toHide].map(element=>{
						element.classList.add("disappear-animation")
					})
				}
				else if(window.innerHeight+boundingHead.top<heightTrigger+150 && window.innerHeight+boundingHead.top>100){
					head.style.opacity="0"
					nav.children[1].style.display=""
					nav.style.height=window.innerHeight+boundingHead.top+"px"
					if(5-(5/(boundingHead.height+boundingHead.top))*100>3){
						nav.children[0].children[0].style.fontSize=4-(5/(boundingHead.height+boundingHead.top))*80+"em";
					}
					else{
						nav.children[0].children[0].style.fontSize="2em";
					}
					nav.children[0].children[0].style.textAlign="center"
					const toHide=document.getElementsByClassName("disappear");
					[...toHide].map(element=>{
						element.classList.remove("disappear-animation")
					})
				}
				else{
					nav.children[0].children[0].style.fontSize="5em"
					head.style.opacity="1"
					nav.style.height="";
				}
			//remaining
				//if(window.innerHeight+boundingHead.top<=100){
				//	personal.classList.add("appear")
				//}
				console.log((window.innerHeight+boundingHead.top)/window.innerHeight )

				switch(true){
					case (triggerPoint<-2.80):{
						document.getElementById("athird").style.fontWeight="normal"
						document.getElementById("afourth").style.fontWeight="bold";
						break;
					}
					case (triggerPoint<-1.80):{
						document.getElementById("asecond").style.fontWeight="normal"
						document.getElementById("athird").style.fontWeight="bold"
						document.getElementById("afourth").style.fontWeight="normal"
						portfolio.classList.add("skills"); break;
					}
					case (triggerPoint<-0.80):{
						document.getElementById("afirst").style.fontWeight="normal"
						document.getElementById("asecond").style.fontWeight="bold"
						document.getElementById("athird").style.fontWeight="normal"
						portfolio.classList.remove("skills");
						skills.classList.add("skills"); break;
					}
					case (triggerPoint<0.10):{
						document.getElementById("afirst").style.fontWeight="bold"
						document.getElementById("asecond").style.fontWeight="normal"
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

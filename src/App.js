import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Header/Nav';
import Main from './Main/Main';
import Bottom from './Bottom/Bottom';
import './Main/Animations.css';

class App extends Component {
	componentDidMount(){
		window.addEventListener('scroll',(event)=>{
			const head=document.getElementById("header");
			const nav=document.getElementById("navigation");
			const personal=document.getElementById("personal-data");
			const skills=document.getElementById("skills");
			const portfolio=document.getElementById("portfolio");
			const about=document.getElementById("personal-data");
			const arrowDown=document.getElementById("arrow-down");
			const boundingHead=head.getBoundingClientRect()
			if((window.innerHeight-Math.abs(boundingHead.top))/window.innerHeight<=0.4 && (window.innerHeight-Math.abs(boundingHead.top))/window.innerHeight>0.07){
				document.styleSheets[2].cssRules[14].style.height=(window.innerHeight-Math.abs(boundingHead.top))/window.innerHeight*100+"%";
				head.style.opacity="0";
			}
			else if((window.innerHeight-Math.abs(boundingHead.top))/window.innerHeight<=0.07){
				document.styleSheets[2].cssRules[14].style.height=(window.innerHeight-Math.abs(boundingHead.top))/window.innerHeight;
			}
			else{
				document.styleSheets[2].cssRules[14].style.height="0px";
				head.style.opacity="1";
			}
			if((window.innerHeight-Math.abs(boundingHead.top))/window.innerHeight<=0.4 && (window.innerHeight-Math.abs(boundingHead.top))/window.innerHeight>0.23){
				document.styleSheets[2].cssRules[15].style.fontSize=(window.innerHeight-Math.abs(boundingHead.top))/window.innerHeight*1300+"%";
				const dis=document.getElementsByClassName("disappear");
				[...dis].map(element=>{
					element.classList.remove("disappear-animation")
					nav.children[0].style.width="";
					nav.children[0].style.textAlign="";
					nav.children[0].children[0].style.margin="";
					nav.children[1].style.textAlign="";
					nav.style.flexDirection="";
					nav.children[1].opacity="";
				})
			}
			else if((window.innerHeight-Math.abs(boundingHead.top))/window.innerHeight<=0.23){
				const dis=document.getElementsByClassName("disappear");
				[...dis].map(element=>{
					element.classList.add("disappear-animation");
					nav.children[0].style.width="50%";
					nav.children[0].style.textAlign="left";
					nav.children[0].children[0].style.margin="0px";
					nav.children[1].style.textAlign="right";
					window.addEventListener("animationend",(event)=>{
						if(event.animationName==="disappear"){
							nav.style.flexDirection="row";
							nav.children[1].style.opacity="1"
						}
					})
				})
			}




		    if(Math.floor(boundingHead.top)<-600){
		    	arrowDown.classList.remove("flex");
		    	arrowDown.classList.add("d-none")
		    	personal.classList.add("appear")
		    }
		else{
			arrowDown.classList.remove("d-none");
		    	arrowDown.classList.add("flex")
		    	personal.classList.remove("appear")
			}


			if(Math.floor(boundingHead.top)<-1200){
		    	skills.classList.add("skills")
		    }
		    else{ skills.classList.remove("skills")}
		    if(Math.floor(boundingHead.top)<-2200){
		    	portfolio.classList.add("skills")
		    }
		    else{ portfolio.classList.remove("skills")}
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

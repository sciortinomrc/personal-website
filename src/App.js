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
			const personal=document.getElementById("personal-data");
			const skills=document.getElementById("skills");
			const portfolio=document.getElementById("portfolio");
			const about=document.getElementById("personal-data");
			const arrowDown=document.getElementById("arrow-down");
			const boundingHead=head.getBoundingClientRect()
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
			if(Math.floor(boundingHead.top)<-900){
				const nav=document.getElementById("navigation");
				nav.classList.remove("d-none");
	    		nav.classList.add("navigation-show");	
		    }
			else{
				const nav=document.getElementById("navigation");
				nav.classList.add("d-none");
	    		nav.classList.remove("navigation-show");
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
      <div className="flex column">
	    <Header />
	    <Nav /> 
	    <Main />
	    <Bottom />
      </div>
    );
  }
}

export default App;

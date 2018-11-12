import React from 'react';
import pagesify from '../Pics/pagesify.png';
import huddle from '../Pics/huddle.jpg';


const showDescription=(event)=>{
	document.styleSheets[4].cssRules[20].style.opacity= 0.7;
}
const hideDescription=(event)=>{
	document.styleSheets[4].cssRules[20].style.opacity= 0;
}
const slideRight=()=>{
	const carousel=document.getElementById('carousel');
	console.log(carousel.scrollWidth)
	if(carousel.scrollLeft===carousel.scrollWidth-800){
		carousel.scroll({left: 0, behavior: 'smooth'})
	}
	else{
		carousel.scroll({left: carousel.scrollLeft+800, behavior: 'smooth'})	
	}
}
const slideLeft=()=>{
	const carousel=document.getElementById('carousel');
	console.log(carousel.scrollWidth)
	if(carousel.scrollLeft===0){
		carousel.scroll({left: carousel.scrollWidth-800, behavior: 'smooth'})
	}
	else{
		carousel.scroll({left: carousel.scrollLeft-800, behavior: 'smooth'})	
	}
}
const Portfolio=()=>{
	return(
		<div id="third" className="flex column full-screen margin-auto  justify-center portfolio-bgcolor">
		<div id="portfolio" className="invisible flex align-end column padding-right-xl">
			<h2 className="text-custom-2 text-center h1-carousel" >{"<"}My<span className="text-custom-1">Works </span>{">"}</h2>
			<div className="border carousel" >
				<div id="carousel" className="carousel-inside" >
					
					<a href="https://pagesify.herokuapp.com" target="_blank"  rel="noopener noreferrer" onMouseOver={()=>showDescription()} onMouseOut={()=>hideDescription()}>
						<div className="description flex column text-center">
							<ul>
								<lh><h3>Pagesify - Facebook pages showcase</h3></lh>
								<li>- Front end: React - Redux - Bootstrap</li>
								<li>- Back end: ExpressJS - PostgreSQL</li>
							</ul></div>
						<img src={pagesify} alt="Pagesify"  />
					</a>
					<a href="https://sciortinomrc.github.io/frontEnd-from-design/" target="_blank"  rel="noopener noreferrer" onMouseOver={()=>showDescription()} onMouseOut={()=>hideDescription()}>
						<div className="description flex column text-center">
							<ul>
								<lh><h3>Huddle - Mock landing page</h3></lh>
								<li>- Front end merged to existing design</li>
								<li>- HTML5, CSS, Responsive</li>
							</ul></div>
						<img src={huddle} alt="Huddle"  />
					</a>

					
				</div>
				<div id="left" className="left" onClick={slideLeft}></div>
				<div id="right" className="right" onClick={slideRight}></div>
				
				{/*<a href="https://pagesify.herokuapp.com" target="_blank" aria-label="Pagesify - Facebook Pages Collection" rel="noopener noreferrer">
					<img className="rounded border" src={pagesify} alt="Pagesify"  />
				</a>*/}
			</div>
		</div>
		</div>
	)
}
export default Portfolio;
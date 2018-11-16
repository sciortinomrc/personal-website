import React from 'react';
import pagesify from '../Pics/pagesify.png';
import huddle from '../Pics/huddle.jpg';


const showDescription=(event)=>{
	document.styleSheets[2].cssRules[34].style.height='200px';
}
const hideDescription=(event)=>{
	document.styleSheets[2].cssRules[34].style.height='0px';
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
		<div id="third" >
		<div id="portfolio" >
			<h2 className="text-custom-2">{"<"}My<span className="text-custom-1">Works </span>{">"}</h2>
			<div id="carousel-container" >
				<div id="carousel" onTouchMove={console.log('start')} onMouseOver={showDescription} onMouseOut={hideDescription}>
					
					<a href="https://pagesify.herokuapp.com" target="_blank"  rel="noopener noreferrer" >
						<div className="description">
							<ul>
								<li><h3>Pagesify - Facebook pages showcase</h3></li>
								<li>- Front end: React - Redux - Bootstrap</li>
								<li>- Back end: ExpressJS - PostgreSQL</li>
							</ul>
						</div>
						<div>
							<img src={pagesify} alt="Pagesify"  />
						</div>

						
					</a>
					<a href="https://sciortinomrc.github.io/frontEnd-from-design/" target="_blank"  rel="noopener noreferrer">
						<div className="description">
							<ul>
								<li><h3>Huddle - Mock landing page</h3></li>
								<li>- Front end merged to existing design</li>
								<li>- HTML5, CSS, Responsive</li>
							</ul>
						</div>
						<div>
							<img src={huddle} alt="Huddle"  />
						</div>
					</a>

					
				</div>
				<div id="left"  onClick={slideLeft}></div>
				<div id="right" onClick={slideRight}></div>
				
			</div>
		</div>
		</div>
	)
}
export default Portfolio;
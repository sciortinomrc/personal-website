import React from 'react';
import pagesify from '../Pics/pagesify.png';
const Portfolio=()=>{
	return(
		<div className="flex column text-center full-screen margin-auto  justify-center portfolio-bgcolor">
		<div id="portfolio" className="invisible abs padding-right-xxl">
			<h2 className="text-custom-2">{"<"}My<span className="text-custom-1">Works </span>{">"}</h2>
			<div>
				<a href="https://pagesify.herokuapp.com" target="_blank" aria-label="Pagesify - Facebook Pages Collection" rel="noopener noreferrer">
					<img className="rounded border" src={pagesify} alt="Pagesify"  />
				</a>
			</div>
		</div>
		</div>
	)
}
export default Portfolio;
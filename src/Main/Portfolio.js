import React from 'react';
import pagesify from '../Pics/pagesify.png';
import matching from '../Pics/matching.jpg';
import calendar from '../Pics/calendar.png';


const Portfolio=()=>{
	return(
		<section id="third" >
		<div id="portfolio" class="text-center" >
			<h2 className="text-custom-2">My Work</h2>
				<div class="d-flex flex-wrap justify-content-center">
					<a href="https://pagesify.herokuapp.com" class="m-4" target="_blank"  rel="noopener noreferrer" >
						<div className="description">
							<h4>Pagesify - Facebook pages showcase</h4>
							<ul>
								<li>- Front end: React - Redux - CSS</li>
								<li>- Back end: ExpressJS - PostgreSQL</li>
							</ul>
						</div>
						<div>
							<img src={pagesify} alt="Pagesify"  />
						</div>		
					</a>
					<a href="https://my-cool-calendar.netlify.com/" class="m-4" target="_blank"  rel="noopener noreferrer">
						<div className="description">
							<h4>Fake calendar for reminders</h4>
							<ul>
								<li>- React/Redux, CSS3</li>
							</ul>
						</div>
						<div>
							<img src={calendar} alt="My-Cool-Calendar"  />
						</div>
					</a>
					<a href="https://sciortinomrc.github.io/matching-game/" class="m-4" target="_blank"  rel="noopener noreferrer">
						<div className="description">
							<h4>Matching game</h4>
							<ul>
								<li>- HTML5, CSS, Vanilla Javascript</li>
							</ul>
						</div>
						<div>
							<img src={matching} alt="Matching game"  />
						</div>
					</a>
				</div>
					
		</div>
		</section>
	)
}
export default Portfolio;
import React from 'react'
import { useEffect, useState } from 'react'
import { Project } from '../components/projects/project'
import { projects } from '../utils/projects'


const Projects = () => {
    const [inViewport, setInViewport] = useState(false)
    useEffect(()=>{
        document.addEventListener("scroll", ()=>{
            const projects = document.getElementById("projects")
            if(window.isInViewport(projects)){
                global.stateManager.update("sections", ["projects", true])
                setInViewport(true)
            }
            else{
                setInViewport(false)
            }
        })
    })

    return <div id="projects" className={`section ${inViewport?"in-view":""}`}> 
        <div class="primary-projects">
            {projects.map(({type, title, description, stack, img, caseStudy, url, stores})=>(
                <Project 
                    key={title}
                    primary={true}
                    type={type}
                    title={title}
                    description={description}
                    stack={stack}
                    caseStudy={caseStudy}
                    url={url}
                    img={img}
                    stores={stores}
                />
            ))}
            
        </div>
        <div class="secondary-projects">
            {projects.map(({type, title, description, stack, img, caseStudy, url, stores})=>(
                <Project 
                    key={title}
                    primary={false}
                    type={type}
                    title={title}
                    description={description}
                    stack={stack}
                    caseStudy={caseStudy}
                    url={url}
                    img={img}
                    stores={stores}
                />
            ))}
        </div>
    </div>
}

export default Projects
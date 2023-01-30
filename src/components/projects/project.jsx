import React from 'react'
import "../../css/apps.css"
import google_store from "../../images/misc/googleplay.png"
import react from "../../images/logos/react.svg"
import redux from "../../images/logos/redux.svg"
import python from "../../images/logos/python.svg"
import css from "../../images/logos/css.svg"
import figma from "../../images/logos/figma.svg"
import nodejs from "../../images/logos/nodejs.svg"
import sass from "../../images/logos/sass.svg"
import jquery from "../../images/logos/jquery.svg"
const logos = {
    "react": react,
    "redux": redux,
    "python": python,
    "css": css,
    "figma": figma,
    "nodejs": nodejs,
    "sass": sass,
    "jquery": jquery
}

export const Project = ({primary, type, title, description, stack, img, url, caseStudy, stores}) => {

    if (primary && type!= "main") return null
    if (!primary && type=="main") return null
    return <div className={"project project-"+type}>
        <div >
            <div className="project-title">
                <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
            </div>
            <div className="project-description">
                {description}
                
            </div>
            <div className="project-scr">
                <a href={url} target="_blank" rel="noopener noreferrer"><img src={img} alt={title + " project screenshot"} /></a>
                <div className="project-links">
                    <div className="project-stores">
                        {stores.google ? <a href={url} target="_blank" rel="noopener noreferrer" ><img src={google_store} alt='google play store'/></a> : null}
                    </div>
                    {caseStudy? 
                        <>
                            <span className="btn-case-study" onClick={()=>{global.stateManager.update("case-study", [{type: "img", content:caseStudy}])}}>See case study</span> 
                            <a className="btn-dwnl-case-study" href={caseStudy} download="mrcdev.whatcanicook.case_study.png">Download case study</a>                            
                        </>:
                        null
                    }
                    
                </div>
            </div>
            
            <div className='project-stack'>
                {stack.map(item=><img src={logos[item]} alt={item} />)}
            </div>
        </div>
    </div>
}
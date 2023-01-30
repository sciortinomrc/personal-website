import React from 'react'
import "../css/case.study.css"

export default () => {  
    const [caseStudy, setCaseStudy] = React.useState(null)
    global.stateManager.setUpdater("case-study", setCaseStudy)
    if(!caseStudy) return null
    if( caseStudy.type=="img" ) return <div className="case-study-wrapper">
        <div className="case-study-inner">
        <div className="case-study-close-btn" onClick={()=>setCaseStudy(null)}> &times; </div>
            <div className="case-study">
                <img src={caseStudy.content} alt="case study" />
            </div>
        </div>
    </div>  
     
    return null
}
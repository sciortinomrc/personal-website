import React from 'react'

const Navigation = ({sections})=>(
    <div className="header-nav">
        <a href="#me" className={sections.me?"in-view":""}>About Me</a>
        <a href="#work" className={sections.experience?"in-view":""}>Experience</a>
        <a href="#projects" className={sections.projects?"in-view":""}>Works</a>
    </div>
)




export default Navigation
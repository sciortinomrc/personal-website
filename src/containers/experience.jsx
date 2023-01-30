import React from 'react'
import "../css/experience.css"
import { WorkEntry } from '../components/experience/work_entry'
import { experiences } from '../utils/experiences'
import { scroll, fold } from "../lib/dom"
import ProgressBar from "../components/progressbar"

class Experience extends React.Component {
    constructor() {
        super()
        this.contentWrapper = React.createRef()
        this.state={inViewport: false}
    }
    componentDidMount() {
        document.addEventListener("scroll", ()=>{
            const work = document.getElementById("work")
            if(window.isInViewport(work)){
                global.stateManager.update("sections", ["experience", true])
                this.setState({inViewport: true})
            }
            else{
                this.setState({inViewport: false})
            }
        })
        setTimeout(() => {
            this.contentWrapper.current.classList.add("show")
        }, 0)
    }
    render() {
        return (
            <div id="work" className={`section ${this.state.inViewport?"in-view":""}`}>
                <div id="work-content" ref={this.contentWrapper}>
                {experiences.map(({type, title, subtitle, url, timeAt, entries})=>(
                    <WorkEntry type={type} title={title} subtitle={subtitle} url={url} timeAt={timeAt}>
                        {entries.map(entry=>(
                            <li>{entry}</li>
                        ))}
                    </WorkEntry>
                ))}
                </div>
            </div>
        )
    }
}

export default Experience
import React from 'react'

import _Me from "../components/me/me"

import {scroll} from "../lib/dom" 
import "../css/me.css"
import hero from "../images/hero.svg"

class Me extends React.Component{
    constructor(){
        super()
        this.section = React.createRef()
        this.contentWrapper = React.createRef()
    }
    componentDidMount(){
        document.addEventListener("scroll", ()=>{
            const me = document.getElementById("me")
            if(window.isInViewport(me)){
                global.stateManager.update("sections", ["me", true])
            }
            
        })
        setTimeout(()=>{
            this.contentWrapper.current.classList.add("show")
        },0)
    }
    render(){
        return (
            <div id="me" ref={this.section} className="section" style={{backgroundImage: `url(${hero})`  }}>
                <div id="me-content" ref={this.contentWrapper}>
                    <div>
                        <_Me.Title />
                        <_Me.Description />
                    </div>
                </div>
                <div class="page-down" onClick={()=>scroll("down",0)}></div>
            </div>
        )
    }
}

export default Me
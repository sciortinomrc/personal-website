import React from 'react'
import Logo from "../components/logo"
import Navigation from "../components/navigation"
import "../css/header.css"
class Header extends React.Component{
    constructor(){
        super()
        this.headerElement = React.createRef()
        this.state={
            sections: {
                me: false, experience: false, projects: false
            }
        }
    }

    setSectionsState(){
        const defaultSections = {me: false, experience: false, projects: false}
        const funct = (label, value)=>{this.setState({sections: {...defaultSections, [label]: value}})}
        global.stateManager.setUpdater("sections", funct)
    }

    componentDidMount(){
        this.setSectionsState()
        setTimeout(()=>{
            this.headerElement.current.classList.add("show")
        },0)

    }
    render(){
        return (
            <React.Fragment>
                <div id="header" ref={this.headerElement}>
                    <Logo/>
                    <Navigation sections={this.state.sections}/>
                </div>                
            </React.Fragment>
        )
    }
}

export default Header
import React, {useState} from 'react'
import Logo from "../components/logo"
import "../css/animations.css"
import "../css/logo.animation.css"


const LogoAnimation = () => {
    const [ready, setReady] = useState(false)
    if(!ready) {
        setTimeout(()=>{
            setReady(true)
        },1000)
        return null
    }
    return (
        <div className="logo-animation">
            <Logo />
        </div>
    )
}

export default LogoAnimation
import React, {useState, useEffect} from 'react';

export default ( {name, experience, value} ) => {
    const [progressValue, setProgressValue] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setProgressValue(value)
            
        },1000)
    })


    return <div className="progress-bar-wrapper">
        <div className="progress-icon">88</div>
        <div className="progress">
            <div className="progress-description">
                <div>
                    <span className="progress-bar-label">Tech</span><br/>
                    <span className="progress-bar-name">{name}</span>
                </div>
                <div>
                    <span className="progress-bar-label">Experience</span><br/>
                    <span className='progress-bar-experience'>{experience}</span>
                </div>
            </div>
            <div className='progress-bar'>
                <div className="progress-inner" style={{width: progressValue+"%"}}></div>
            </div>
        </div>
    </div>

}

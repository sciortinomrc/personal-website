import React from 'react'

export const WorkEntry = ({ url, type, title, subtitle, timeAt, children }) => (
    <div className={"postit "+type}>
        <div>
            <div className="postit-header">
                <h3>
                    {url?<a href={url} target="_blank" rel="noopener noreferrer">{title}</a>:
                        <>{title}</>
                    }
                </h3>
                {subtitle? <p>{subtitle}</p>: 
                            null}
                
                <p>{timeAt}</p>
            </div>
            <div className="postit-description">
                <ul>
                    {children}
                </ul>
            </div>
        </div>
        <div className="postit-rounded-side-left"></div>
        <div className="postit-rounded-side-right"></div>
    </div>
)
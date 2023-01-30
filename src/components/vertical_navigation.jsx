import React from 'react'

export default ()=>{
    <React.Fragment>
        <div className="page-up" onClick={()=>scroll("up")}></div>
        <div class="page-down" onClick={()=>scroll("down")}></div>
    </React.Fragment>
}
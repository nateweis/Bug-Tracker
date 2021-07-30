import React from 'react'

export default (props) => {
    
    return(
        <div className="bug-card">
            <h2 className="name">{props.name}</h2>
            <h4 className="priority">{props.priority} </h4>
            <h5 className="version">{props.version} </h5>
        </div>
    )
}
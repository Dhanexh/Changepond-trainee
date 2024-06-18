import React from 'react'

const ChildComp = (props) => {
    return (
        <div>
            <h2>This is Child Component</h2>
            <p>Employee name is <strong>{props.name}</strong></p>
            <p>Employee salary is <strong>{props.salary}</strong></p>
            <button type='button' onClick={()=>props.changeData()}>Change</button>
        </div>
    )
}

export default ChildComp

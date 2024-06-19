import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ReactHooksComp = () => {
    return (
        <div>
            <h4>This is Reacthook Component</h4>
            <div className='card border-primary'>
                <div className='card-header border-primary'>
                    <Link to="usestate" className='btn btn-success btn-sm'>UseSate</Link>{" "}
                    <Link to="useeffect" className='btn btn-danger btn-sm'>UseEffect</Link>{" "}
                </div>
                <div className='card-body border-primary'><Outlet/></div>

            </div>
            
        </div>
    )
}

export default ReactHooksComp

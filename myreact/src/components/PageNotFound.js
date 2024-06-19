import React from 'react'
import staticData from '../shared/constant/constantData'

const PageNotFound = () => {
    return (
        <div>
            <h1 style={{color:"red",textAlign:"center"}}>404...........Page Not Found</h1>
            <p style={{color:"green",textAlign:"center"}}>Try another Routing<br/>
            <img src={staticData.pageNotFound} alt='' />
            </p>
            
        </div>
    )
}

export default PageNotFound

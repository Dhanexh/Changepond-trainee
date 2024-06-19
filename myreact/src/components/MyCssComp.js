import React from 'react'
import staticData from '../shared/constant/constantData'
import './external.css'
import mymodulecss from './mymodulecss.module.css'

const MyCssComp = () => {

    const txtObj ={

        color:"blue",
        fontSize:false?"20px":"30px",
        backgroundColor:true?"pink":"lightgray"
    }
    return (
        <>
            {/* internal css */}
            <h2 style={{color:"Red", backgroundColor:"aqua"}}>This is MyCss component</h2>
            <p style={txtObj}>Hello friends, Welcome !!</p>

            {/* external css */}
            <img className='imgProp' src={staticData.ponnu}/><br/>
            <img className={mymodulecss.box} src={staticData.ironman}/>

        </>
    )
}

export default MyCssComp

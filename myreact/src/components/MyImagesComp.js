import React, { Component } from 'react'
import ironman from '../shared/images/ironmann.jpg'
import hulk from '../shared/images/hulkk.jpg'

import staticData from '../shared/constant/constantData'


export class MyImagesComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h2>This is myImagesComp Component</h2>
                <img src={ironman} height='200px'/> &nbsp;
                <img src={hulk} height='200px'/>
                <hr/>
                <img src={staticData.captain} height='200px'/> &nbsp;
                <img src={staticData.blackWidow} height='200px'/>&nbsp;
                <img src={staticData.tamannahh} height='200px'/>
                <hr/>
                <img src={staticData.ponnu} height='200px'/>


            </div>
        )
    }
}

export default MyImagesComp

import React, { Component } from 'react'
import staticData from '../shared/constant/constantData'

export class ToggleImage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             currentImage: 'Ironman'
        }
    }

    toggleImage = ()=>{
        const newImage = this.state.currentImage === 'Ironman' ? 'Hulk' : 'Ironman';
        this.setState({ currentImage: newImage })
    };
    
    render() {
        return (
            <>
                <h2>Toggle Image</h2>
                <div>
                    {this.state.currentImage === 'Ironman' ? (
                        <div>
                            <img src={staticData.ironman} height="200px"/>
                            <p>{this.state.currentImage}</p>
                        </div>
                    ) : (
                        <div>
                            <img src={staticData.hulk} height="200px"/>
                            <p>{this.state.currentImage}</p>
                        </div>
                    )}
                </div>
                <button type='button' onClick={this.toggleImage}>Toggle</button>
            </>
        )
    }
}

export default ToggleImage

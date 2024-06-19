import React, { Component } from 'react'
import HocComp from './HocComp'

export class HoverCounterComp extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         count:0
    //     }
    // }

    // counterInc = ()=>{
    //     // this.setState({count:this.state.count+1})
    //     this.setState((prevState)=>({count:prevState.count+1}))
    // }

    render() {
        return (
            <>
                <h3 >Count value is : <strong>{this.props.count}</strong></h3>
                <p onMouseOver={()=>this.props.counterInc()}>Hover++</p> 
                {/* <button type="button" onClick={()=>this.counterInc()}>Count++</button> */}
            </>
        )
    }
}

export default HocComp(HoverCounterComp)

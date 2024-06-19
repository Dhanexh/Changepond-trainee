import React, { Component } from 'react'
import HocComp from './HocComp'
import { Button } from '@mui/material'

export class ClickCounterComp extends Component {
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
                {/* <h3>Count value is : <strong>{this.state.count}</strong></h3>
                <button type="button" onClick={()=>this.counterInc()}>Count++</button> */}
                <h3>Count value is : <strong>{this.props.count}</strong></h3>
                {/* <button type="button" className='btn btn-primary' onClick={()=>this.props.counterInc()}>Count++</button> */}
                <Button variant='contained' onClick={()=>this.props.counterInc()}>Count++</Button>
                <hr/>
            </>
        )
    }
}

export default HocComp(ClickCounterComp) 

import React, { Component } from 'react'

const HOCComp = (WraperComp) => {
    
    
    class Hoc extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                count:0
            }
        }
    
        counterInc = ()=>{
            // this.setState({count:this.state.count+1})
            this.setState((prevState)=>({count:prevState.count+1}))
        }

        render(){
            return <WraperComp count={this.state.count} counterInc={this.counterInc}></WraperComp>
        }
    }
    return Hoc
}

export default HOCComp

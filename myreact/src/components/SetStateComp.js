import { Component } from "react";

class SetStateComp extends Component{

    constructor(props){
        super(props);

        this.state = {
            count:0,
            name:"Dhanesh"

        }
    }

    counterInc = ()=>{
        // this.setState({count:this.state.count+1})
        this.setState((prevState)=>({count:prevState.count+1}))
    }

    counterDec = ()=>{
        // this.setState({count:this.state.count+1})
        this.setState((prevState)=>({count:prevState.count-1}))
    }

    changeName = ()=>{
        this.setState((prevState)=>({name:"Dhanesh Uchiha"}))
    }

    render() {
        return (
            <div>
                <h2>This is SetStateComponent Component</h2>
                <p>My name is: <strong>{this.state.name}</strong></p>
                <p>Count value is : <strong>{this.state.count}</strong></p>
                <button type="button" onClick={()=>this.counterInc()}>Count++</button>
                <button type="button" onClick={()=>this.counterDec()}>Count--</button>
                <button type="button" onClick={()=>this.changeName()}>ChangeName</button>
            </div>
        )
    }
}

export default SetStateComp;
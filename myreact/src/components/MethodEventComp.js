import React, { Component } from "react";

class MethodEventComp extends Component{

    greeting = ()=>{
        window.alert("Good Afternoon friends");
    }

    welcome = (...std)=>{
        window.alert(`Welcome you ${std}`);
    }

    render(){
        return <div>
            <h2>This is method Event Component</h2>
            <button type="button" onClick={()=>this.greeting()}>Greeting</button>
            <button type="button" onClick={()=>this.welcome("Dhanesh")}>Welcome</button>
            <h2 onMouseOver={()=>this.greeting()}>Hover for greeting</h2>
        </div>
    }
}

export default MethodEventComp;
import React, { Component } from "react";

class ClassComp extends Component{

    constructor(){
        super();
        this.state = {
            company:"Changepond",
            salary:75000
        }
    }

    render(){
        const{myName,post} = this.props; //destructing on props
        const{company,salary} = this.state; //destructing on state

        return <div>
            <h2>This is Class Component</h2>
            {/* {accessing props data} */}
            <p>My name is {myName}, I'm a {post}</p>

            {/* {accessing state data} */}
            {/* <p>Company name is {this.state.company}, my salary is {this.state.salary}</p> */}
            <p>Company name is {company}, my salary is {salary}</p>

        </div>

    }
}

export default ClassComp;
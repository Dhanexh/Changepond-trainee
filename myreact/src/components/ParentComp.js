import React, { Component } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             empName:"Dhanesh",
             empSalary:95000
        }
    }

    changeData = ()=>{
        this.setState((prevState)=>({empSalary:prevState.empSalary+1,empName:"Dhanesh Khan"}))
    }
    
    render() {
        return (
            <div>
                <h2>This is Parent Component</h2>
                <p>Employee name is <strong>{this.state.empName}</strong></p>
                <p>Employee salary is <strong>{this.state.empSalary}</strong></p>
                <button type='button' onClick={()=>this.changeData()}>Change</button>
                <hr/>
                <ChildComp name={this.state.empName} salary={this.state.empSalary} changeData={this.changeData}></ChildComp>
            </div>
        )
    }
}

export default ParentComp

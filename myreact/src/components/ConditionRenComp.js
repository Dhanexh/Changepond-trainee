import { Component } from "react";


class ConditionRenComp extends Component{

    constructor(props){
        super(props)

        this.state = {
            isCond:true
        }
    }

    render(){
        // 1. Use of if else
        // let msg = "";
        // if(!this.state.isCond){
        //     // return <h2>Admin Login Successful</h2>
        //     msg = "Admin Login Succesful";
        // }else{
        //     // return <h2>User Login Successful</h2>
        //     msg = "User Login Succesful";
        // }


        // 2.Element as variable
        // return <h2>{msg}</h2>

        
        // 3.Ternary operator
        // return this.state.isCond ? <h2>Admin Login Successful</h2> : <h2>User Login Successful</h2>

        // 4.Short-circuit
        return this.state.isCond && <h2>Admin Login Successful</h2>
    }
}

export default ConditionRenComp; 